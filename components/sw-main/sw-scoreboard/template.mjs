const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-scoreboard/shadow.css">
    <main>
        <h1 id="cohort"></h1>
        <h2 id="best"></h2>
    </main>
`;

export default template;