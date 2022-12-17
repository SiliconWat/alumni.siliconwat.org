const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-cohort/shadow.css">
    <aside>
        <select id="year" onchange="this.getRootNode().host.changeYearTerm(event)"></select>
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
    </aside>
`;

export default template;