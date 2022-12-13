import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-coin/shadow.css">
    <svg viewBox="0 0 120 120" width="0">
        <circle cx="60" cy="60" r="54" fill="none" stroke="#f2b134" stroke-width="12"/>
        <circle id="ring" cx="60" cy="60" r="54" fill="none" stroke="white" stroke-width="12" pathLength="100"/>
        <text id="fraction" text-anchor="middle" x="60" y="68" fill="white" transform="rotate(90, 60, 60)" font-size="20" font-weight="bold"></text>
        <text id="percent" text-anchor="middle" x="60" y="70" fill="white" transform="rotate(90, 60, 60)" font-size="25" font-weight="bold"></text>
    </svg>
`;

export default template;