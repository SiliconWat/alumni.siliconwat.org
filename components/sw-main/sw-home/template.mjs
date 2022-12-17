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
`;

export default template;