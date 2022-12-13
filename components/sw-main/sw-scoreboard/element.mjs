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
        this.style.display = 'block';
    }
}

customElements.define("sw-scoreboard", SwScoreboard);