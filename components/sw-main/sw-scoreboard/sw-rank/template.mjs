import { FRONTEND_COURSE as FRONTEND } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${FRONTEND}/components/sw-main/sw-cohort/table.css">
    <link rel="stylesheet" href="components/sw-main/sw-scoreboard/sw-rank/shadow.css">
    <table>
        <caption>Student Rankings</caption>
        <colgroup>
            <col span="1">
            <col span="1">
            <col span="1">
            <col span="1">
            <col span="1">
            <col span="1">
        </colgroup>
        <thead>
            <tr>
                <th scope="col">RANK</th>
                <th scope="col">STUDENT</th>
                <th scope="col">Score</th>
                <th scope="col">Best Startup</th>
                <th scope="col">Best Idea</th>
                <th scope="col">Best Code</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
`;

export default template;