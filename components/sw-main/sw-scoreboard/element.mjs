import { FRONTEND } from "/global.mjs";
import template from './template.mjs';

class SwScoreboard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    #cohorts = {
        frontend: "Frontend Music Cohort",
        backend: "Backend Blockchain Cohort",
        ios: "iOS Metaverse Cohort"
    };

    render(cohort, game) {
        this.shadowRoot.getElementById('cohort').textContent = this.#cohorts[cohort];
        this.shadowRoot.getElementById('best').textContent = game ? game.capitalize() : "Student Roster";

        this.#render(cohort, game);
        this.style.display = 'block';
    }

    async #render(cohort, game) {
        const { getYear, getTerm, getData } = await import(`${FRONTEND}/global2.mjs`);
        const y = getYear();
        const term = getTerm();
        const students = await getData(`https://raw.githubusercontent.com/SiliconWat/${cohort}-cohort/main/Students.json`);
        const votes = await getData(`https://raw.githubusercontent.com/SiliconWat/${cohort}-cohort/main/${y}/${term[1] === 'semester' ? "Semesters" : "Quarters"}/${term[2].capitalize()}/Votes.json`);
        console.log(students)
        console.log(votes)
    }
}

customElements.define("sw-scoreboard", SwScoreboard);