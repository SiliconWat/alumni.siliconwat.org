import { FRONTEND } from "/global.mjs";
import template from './template.mjs';

class SwRank extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(cohort, best) {
        const { getYear, getTerm, getData } = await import(`${FRONTEND}/global2.mjs`);
        const y = getYear();
        const term = getTerm();
        const students = await getData(`https://raw.githubusercontent.com/SiliconWat/${cohort}-cohort/main/Students.json`);
        const votes = await getData(`https://raw.githubusercontent.com/SiliconWat/${cohort}-cohort/main/${y}/${term[1] === 'semester' ? "Semesters" : "Quarters"}/${term[2].capitalize()}/Votes.json`);
        
        const data = JSON.parse(localStorage.getItem('data')) || await this.#createData(y, term, students, votes); // TODO: later?
        this.#render(this.#sort(data, best));
    }

    #render(data) {
        const tbody = document.createDocumentFragment();

        data.forEach((item, i) => {
            const tr = document.createElement('tr');
            const rank = document.createElement('th');
            const student = document.createElement('td');
            const score = document.createElement('td');
            const startup = document.createElement('td');
            const idea = document.createElement('td');
            const code = document.createElement('td');

            rank.textContent = `#${i + 1}`;
            student.textContent = item.student.username;
            score.textContent = item.student.score;
            startup.textContent = item.votes.startup ? item.votes.startup.length : 0;
            idea.textContent = item.votes.idea ? item.votes.idea.length : 0;
            code.textContent = item.votes.code ? item.votes.code.length : 0;

            tr.append(rank, student, score, startup, idea, code);
            tbody.append(tr);
        });

        this.shadowRoot.querySelector('tbody').replaceChildren(tbody);
    }

    async #createData(y, term, students, votes) {
        const data = [];
        
        for (let student in students) {
            const cohort = students[student].cohorts.find(cohort => cohort.year === y && cohort.system === term[1] && cohort.season === term[2]);
            if (cohort) {
                const item = {};
                item.student = { username: student, ...cohort };
                item.votes = { startup: votes.startup[student], idea: votes.idea[student], code: votes.code[student] };
                data.push(item);
            }
        }

        return data;
    }

    #sort(array, best) {
        switch (best) {
            case "startup":
                return;
            case "idea":
                return;
            case "code":
                return;
            case "student":
                return array.sort((a, b) => {
                    if (a.student.username < b.student.username) return -1;
                    if (a.student.username > b.student.username) return 1;
                    return 0;
                });
            default: 
                return array.sort((a, b) => {
                    if (a.student.score < b.student.score) return 1;
                    if (a.student.score > b.student.score) return -1;
                    return 0;
                });
        }
    }
}

customElements.define("sw-rank", SwRank);