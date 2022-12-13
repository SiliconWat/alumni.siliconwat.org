import { THONLY } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="https://siliconwat.com"><img src="siliconwat.png"></a>
            <a href="#"><h1>Student Project Showcase</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul>
            <li>
                <h3>Frontend Music Cohort</h3>
                <nav>
                    <a href="#frontend"><button>Student Roster</button></a>
                    <h4>Scoreboard</h4>
                    <menu>
                        <li><a href="#frontend-startup">Best Startup</a></li>
                        <li><a href="#frontend-idea">Best Idea</a></li>
                        <li><a href="#frontend-code">Best Code</a></li>
                    </menu>
                </nav>
            </li>
            <li>
                <h3>Backend Blockchain Cohort</h3>
                <nav>
                    <a href="#backend"><button>Student Roster</button></a>
                    <h4>Scoreboard</h4>
                    <menu>
                        <li><a href="#backend-startup">Best Startup</a></li>
                        <li><a href="#backend-idea">Best Idea</a></li>
                        <li><a href="#backend-code">Best Code</a></li>
                    </menu>
                </nav>
            </li>
            <li>
                <h3>iOS Metaverse Cohort</h3>
                <nav>
                    <a href="#ios"><button>Student Roster</button></a>
                    <h4>Scoreboard</h4>
                    <menu>
                        <li><a href="#ios-startup">Best Startup</a></li>
                        <li><a href="#ios-idea">Best Idea</a></li>
                        <li><a href="#ios-code">Best Code</a></li>
                    </menu>
                </nav>
            </li>
        </ul>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="es" disabled>Spanish</option>
                <option value="ru" disabled>Russian</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;