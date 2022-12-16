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
        this.#render(cohort, best, data);
    }

    #render(cohort, best, data) {
        const tbody = document.createDocumentFragment();

        // thead

        const score = this.shadowRoot.querySelector('thead th:nth-child(3)');
        const startup = this.shadowRoot.querySelector('thead th:nth-child(4)');
        const idea = this.shadowRoot.querySelector('thead th:nth-child(5)');
        const code = this.shadowRoot.querySelector('thead th:nth-child(6)');

        score.onclick = () => window.location.hash = cohort;
        startup.onclick = () => window.location.hash = `${cohort}-startup`;
        idea.onclick = () => window.location.hash = `${cohort}-idea`;
        code.onclick = () => window.location.hash = `${cohort}-code`;

        // tbody

        this.#sort(data, best).forEach((item, i) => {
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
            startup.textContent = item.votes.startup.length;
            idea.textContent = item.votes.idea.length;
            code.textContent = item.votes.code.length;

            tr.append(rank, student, score, startup, idea, code);
            tbody.append(tr);
        });

        this.shadowRoot.querySelector('tbody').replaceChildren(tbody);
    }

    async #createData(y, term, students, votes) {
        const data = [];
        votes.startup = votes.startup || {};
        votes.idea = votes.idea || {};
        votes.code = votes.code || {};
        
        for (let student in students) {
            const cohort = students[student].cohorts.find(cohort => cohort.year === y && cohort.system === term[1] && cohort.season === term[2]);
            if (cohort) {
                const item = {};
                item.student = { username: student, ...cohort };
                item.votes = { startup: votes.startup[student] || [], idea: votes.idea[student] || [], code: votes.code[student] || [] };
                data.push(item);
            }
        }

        return data;
    }

    #sort(array, best) {
        return this.#sortByBest([...this.#sortByUsername(array)], best);
    }

    #sortByBest(array, best) {
        switch (best) {
            case "startup":
                return array.sort((a, b) => b.votes.startup.length - a.votes.startup.length);
            case "idea":
                return array.sort((a, b) => b.votes.idea.length - a.votes.idea.length);
            case "code":
                return array.sort((a, b) => b.votes.code.length - a.votes.code.length);
            default: 
                return array.sort((a, b) => b.student.score - a.student.score);
        }
    }

    #sortByUsername(array) {
        return array.sort((a, b) => {
            if (a.student.username < b.student.username) return -1;
            if (a.student.username > b.student.username) return 1;
            return 0;
        }); 
    }
}

customElements.define("sw-rank", SwRank);