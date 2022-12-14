import "/components/sw-main/sw-scoreboard/sw-rank/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-scoreboard/shadow.css">
    <main>
        <h1 id="cohort"></h1>
        <h2><select id="year" onchange="this.getRootNode().host.changeYearTerm(event)"></select></h2>
        <h3>
            <select id="term" onchange="this.getRootNode().host.changeYearTerm(event)">
                <optgroup label="Semester (Part-Time Program)">
                    <option value="semester-winter">Winter Semester</option>
                    <option value="semester-summer">Summer Semester</option>
                </optgroup>
                <optgroup label="Quarter (Full-Time Program)">
                    <option value="quarter-winter">Winter Quarter</option>
                    <option value="quarter-spring">Spring Quarter</option>
                    <option value="quarter-summer">Summer Quarter</option>
                    <option value="quarter-fall">Fall Quarter</option>
                </optgroup>
            </select>
        </h3>
        <sw-rank></sw-rank>
    </main>
`;

export default template;