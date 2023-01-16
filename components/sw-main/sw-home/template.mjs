import "/components/sw-main/sw-cohort/element.mjs";
import "/components/sw-main/sw-home/sw-best/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-home/shadow.css">
    <main>
        <h1>Best Student Projects</h1>
        <sw-cohort></sw-cohort>
        <sw-best></sw-best>
    </main>
    <footer>
        <p><strong>Top graduates</strong> have the opportunity to interview for a <em>paid consultancy</em> at <a href="https://siliconwat.dev">Silicon Wat Agency</a>!</p>
    </footer>
`;

export default template;