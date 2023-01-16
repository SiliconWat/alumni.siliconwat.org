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
    <footer>
        <p><strong>Top graduates</strong> have the opportunity to <em>tutor</em> <strong>new students</strong> to gain more experience and more <strong>SW Coins</strong>!</p>
        <p>Afterwards, <strong>top tutors</strong> have the opportunity to interview for a <em>paid consultancy</em> at <a href="https://siliconwat.dev">Silicon Wat Agency</a>!</p>
    </footer>
`;

export default template;