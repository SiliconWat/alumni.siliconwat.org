import { FRONTEND_COURSE as FRONTEND } from "https://thonly.org/global.mjs";
import template from './template.mjs';

class SwBest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render() {
        const { getYear, getTerm, getData } = await import(`${FRONTEND}/global2.mjs`);
        const y = getYear();
        const term = getTerm();
        const cohorts = JSON.parse(localStorage.getItem(`${y}-${term}`)) || await this.#findBest(y, term, getData); // TODO: later?
        this.#render(cohorts);
    }

    #render(cohorts) {
        const tbody = document.createDocumentFragment();

        cohorts.forEach(cohort => {
            const tr = document.createElement('tr');
            const Cohort = document.createElement('th');
            const startup = document.createElement('td');
            const idea = document.createElement('td');
            const code = document.createElement('td');

            Cohort.textContent = cohort.title;
            Cohort.onclick = () => window.location.hash = cohort.cohort;
            this.#renderBest(startup, cohort.startup);
            this.#renderBest(idea, cohort.idea);
            this.#renderBest(code, cohort.code)

            tr.append(Cohort, startup, idea, code);
            tbody.append(tr);
        });

        this.shadowRoot.querySelector('tbody').replaceChildren(tbody);
    }

    #renderBest(element, students) {
        if (students) students.forEach(student => {
            const a = document.createElement('a');
            if (student.project) a.setAttribute('href', student.project);
            a.textContent = `@${student.username}`;
            a.title = `Voters: ${student.voters.join(", ")}`;
            element.append(a);
        }) 
        else element.append("TBD");
    }

    #cohorts = [
        {
            cohort: "frontend",
            title: "Frontend Music"
        },
        {
            cohort: "backend",
            title: "Backend Blockchain"
        },
        {
            cohort: "ios",
            title: "iOS Metaverse"
        }
    ];

    async #findBest(y, term, getData) {
        for (let best of this.#cohorts) {
            const students = await getData(`https://raw.githubusercontent.com/SiliconWat/${best.cohort}-cohort/main/Students.json`);
            const votes = await getData(`https://raw.githubusercontent.com/SiliconWat/${best.cohort}-cohort/main/${y}/${term[1] === 'semester' ? "Semesters" : "Quarters"}/${term[2].capitalize()}/Votes.json`);
            best.startup = votes.startup ? this.#getBest(y, term, students, votes.startup) : null;
            best.idea = votes.idea ? this.#getBest(y, term, students, votes.idea) : null;
            best.code = votes.code ? this.#getBest(y, term, students, votes.code) : null;
        }

        return this.#cohorts;
    }

    #getBest(y, term, students, voters) {
        let max = 0, best = [];

        for (let student in voters) {
            const cohort = students[student].cohorts.find(cohort => cohort.year === y && cohort.system === term[1] && cohort.season === term[2]);

            if (voters[student].length > max) {
                max = voters[student].length;
                best = [{ username: student, voters: voters[student].sort(), ...cohort }];
            } else if (voters[student].length === max) {
                best.push({ username: student, voters: voters[student].sort(), ...cohort });
            }
        }

        return best.sort((a, b) => {
            if (a.username < b.username) return -1;
            if (a.username > b.username) return 1;
            return 0;
        });
    }
}

customElements.define("sw-best", SwBest);