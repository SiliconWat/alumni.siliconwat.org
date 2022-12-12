import template from './template.mjs';

class SwScoreboard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(cohort, game) {
        this.style.display = 'block';
    }
}

customElements.define("sw-scoreboard", SwScoreboard);