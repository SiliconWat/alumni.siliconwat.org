const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-scoreboard/shadow.css">
    <main>
        <h1 id="cohort"></h1>
        <h2 id="best"></h2>
        <table>
            <caption>Students vs Chapters</caption>
            <colgroup>
                <col span="1">
                <col span="1">
                <col span="1">
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">CHAPTER</th>
                    <th scope="col">@thonly</th>
                    <th scope="col">AVG</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th scope="row">SCORE</th>
                    <th scope="col">100%</th>
                    <th scope="row">Overall Cohort Score</th>
                </tr>
            </tfoot>
        </table>
    </main>
`;

export default template;