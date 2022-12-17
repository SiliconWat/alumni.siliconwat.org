import "/components/sw-main/sw-cohort/element.mjs";
import "/components/sw-main/sw-scoreboard/sw-rank/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-home/shadow.css">
    <link rel="stylesheet" href="components/sw-main/sw-scoreboard/shadow.css">
    <main>
        <h1 id="cohort"></h1>
        <sw-cohort></sw-cohort>
        <sw-rank></sw-rank>
    </main>
`;

export default template;