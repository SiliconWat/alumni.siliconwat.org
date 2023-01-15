import { FRONTEND_COURSE as FRONTEND } from "https://thonly.org/global.mjs";
import template from './template.mjs';

class SwRank extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(cohort, best) {
        const { getYear, getTerm, getData, getEmoji } = await import(`${FRONTEND}/global2.mjs`);
        const y = getYear();
        const term = getTerm();
        const students = await getData(`https://raw.githubusercontent.com/SiliconWat/${cohort}.siliconwat.dev/main/Students.json`);
        const votes = await getData(`https://raw.githubusercontent.com/SiliconWat/${cohort}.siliconwat.dev/main/${y}/${term[1] === 'semester' ? "Semesters" : "Quarters"}/${term[2].capitalize()}/Votes.json`);
        
        const data = JSON.parse(localStorage.getItem('data')) || await this.#createData(y, term, students, votes); // TODO: later?
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

        if (data.length > 0) {
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
                startup.title = item.student.project ? `Voters: ${item.votes.startup.join(", ") || "None"}` : "TBD";
                idea.textContent = item.student.project ? item.votes.idea.length : "TBD";
                idea.title = item.student.project ? `Voters: ${item.votes.idea.join(", ") || "None"}` : "TBD";
                code.textContent = item.student.project ? item.votes.code.length : "TBD";
                code.title = item.student.project ? `Voters: ${item.votes.code.join(", ") || "None"}` : "TBD";

                tr.append(rank, student, score, startup, idea, code);
                tbody.append(tr);
            });
        } else {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.colSpan = 6;
            td.style.fontStyle = 'italic';
            td.textContent = "TBD";
            tr.append(td);
            tbody.append(tr);
        }

        this.shadowRoot.querySelector('tbody').replaceChildren(tbody);
        this.#highlight(best);
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

    #highlight(best) {
        this.shadowRoot.querySelectorAll('col').forEach(element => element.classList.remove('highlight'));
        switch (best) {
            case "startup":
                this.shadowRoot.querySelector('col:nth-child(4)').classList.add('highlight');
                break;
            case "idea":
                this.shadowRoot.querySelector('col:nth-child(5)').classList.add('highlight');
                break;
            case "code":
                this.shadowRoot.querySelector('col:nth-child(6)').classList.add('highlight');
                break;
            default: 
                this.shadowRoot.querySelector('col:nth-child(3)').classList.add('highlight');
        }
    }
}

customElements.define("sw-rank", SwRank);