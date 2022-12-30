import { FRONTEND_COURSE as FRONTEND } from "https://thonly.org/global.mjs";
import template from './template.mjs';

class SwCohort extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async connectedCallback() {
        const { YEAR_BEGAN, YEAR, TERM, getYear, getTerm } = await import(`${FRONTEND}/global2.mjs`);
        const y = getYear();
        const term = getTerm();
        this.#renderSelectYear(YEAR_BEGAN, YEAR, y);
        this.#renderSelectTerm(YEAR, y, TERM, term);
    }

    #renderSelectYear(YEAR_BEGAN, YEAR, year) {
        const fragment = document.createDocumentFragment();

        for (let y = YEAR_BEGAN; y <= YEAR+1; y++) {
            const option = document.createElement('option');
            option.setAttribute('value', y);
            option.textContent = `Academic Year ${y}`;
            if (y === YEAR) option.textContent = option.textContent.toUpperCase();
            fragment.append(option);
        }

        const select = this.shadowRoot.getElementById('year');
        select.replaceChildren(fragment);
        select.value = year;
    }

    #renderSelectTerm(YEAR, y, TERM, term) {
        const semesters = document.createDocumentFragment();
        const quarters = document.createDocumentFragment();
        this.#createTermOptions(semesters, ["semester-winter", "semester-summer"]);
        this.#createTermOptions(quarters, ["quarter-winter", "quarter-spring", "quarter-summer", "quarter-fall"]);

        const select = this.shadowRoot.getElementById('term');
        select.firstElementChild.replaceChildren(semesters);
        select.lastElementChild.replaceChildren(quarters);

        if (y === YEAR) {
            const option = select.querySelector(`[value=${TERM}]`);
            option.textContent = option.textContent.toUpperCase();
        }

        select.value = term[0];
    }

    #createTermOptions(fragment, array) {
        array.forEach(cycle => {
            const term = cycle.split('-');
            const option = document.createElement('option');
            option.value = cycle;
            option.textContent = `${term[1].capitalize()} ${term[0].capitalize()}`;
            fragment.append(option);
        });
    }

    changeYearTerm(event) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set(event.target.id, event.target.value);
        window.location.search = searchParams.toString();
    }
}

customElements.define("sw-cohort", SwCohort);