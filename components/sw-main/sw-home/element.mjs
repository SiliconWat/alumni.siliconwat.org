import template from './template.mjs';

class SwHome extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render() {
        this.shadowRoot.querySelector('sw-best').render();
        this.style.display = 'block';
    }
}

customElements.define("sw-home", SwHome);