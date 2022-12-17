import { FRONTEND } from "/global.mjs";
import template from './template.mjs';

class SwBest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render() {
        const { getYear, getTerm, getData, getEmoji } = await import(`${FRONTEND}/global2.mjs`);
        const y = getYear();
        const term = getTerm();
        const votes = await getData(`https://raw.githubusercontent.com/SiliconWat/${cohort}-cohort/main/${y}/${term[1] === 'semester' ? "Semesters" : "Quarters"}/${term[2].capitalize()}/Votes.json`);
        
        const data = JSON.parse(localStorage.getItem('best')) || await this.#createData(y, term, students, votes); // TODO: later?
        this.#render(cohort, best, data, getEmoji);
    }

    #render(cohort, best, data, getEmoji) {
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
            const student = document.createElement('th');
            const score = document.createElement('td');
            const startup = document.createElement('td');
            const idea = document.createElement('td');
            const code = document.createElement('td');

            rank.textContent = `#${i + 1}`;
            if (item.student.project) {
                rank.style.cursor = "pointer";
                rank.title = item.student.project;
                rank.onclick = () => document.location = rank.title;
            }
            student.textContent = `${getEmoji(item.student)} ${item.student.username}`;
            student.style.cursor = "pointer";
            student.title = `https://github.com/${item.student.username}`;
            student.onclick = () => document.location = student.title;
            score.textContent = item.student.score || "TBD";
            startup.textContent = item.student.project ? item.votes.startup.length : "TBD";
            startup.title = item.student.project ? item.votes.startup.join(", ") || "No Voters" : "TBD";
            idea.textContent = item.student.project ? item.votes.idea.length : "TBD";
            idea.title = item.student.project ? item.votes.idea.join(", ") || "No Voters" : "TBD";
            code.textContent = item.student.project ? item.votes.code.length : "TBD";
            code.title = item.student.project ? item.votes.code.join(", ") || "No Voters" : "TBD";

            tr.append(rank, student, score, startup, idea, code);
            tbody.append(tr);
        });

        this.shadowRoot.querySelector('tbody').replaceChildren(tbody);
        this.#highlight(best);
    }

    async #getBest() {
        
    }
}

customElements.define("sw-best", SwBest);