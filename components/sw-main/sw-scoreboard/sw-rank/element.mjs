import { FRONTEND } from "/global.mjs";
import template from './template.mjs';

class SwRank extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(cohort, game) {
        const { getYear, getTerm, getData } = await import(`${FRONTEND}/global2.mjs`);
        const y = getYear();
        const term = getTerm();
        const students = await getData(`https://raw.githubusercontent.com/SiliconWat/${cohort}-cohort/main/Students.json`);
        const votes = await getData(`https://raw.githubusercontent.com/SiliconWat/${cohort}-cohort/main/${y}/${term[1] === 'semester' ? "Semesters" : "Quarters"}/${term[2].capitalize()}/Votes.json`);
        console.log(students)
        console.log(votes)
    }
}

customElements.define("sw-rank", SwRank);