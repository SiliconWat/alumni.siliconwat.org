import "/components/sw-main/sw-home/element.mjs";
import "/components/sw-main/sw-scoreboard/element.mjs";

import "/components/sw-header/element.mjs";
import "/components/sw-footer/element.mjs";
import "/components/sw-main/element.mjs";

import { FRONTEND_COURSE as FRONTEND, QUIZ, BACKGROUND } from "https://thonly.org/global.mjs";
window.onload = async () => {
    await import(`${FRONTEND}/admin.mjs`);
    await import(`${QUIZ}/components/sw-coin/element.mjs`);
    if (!window.TESTING) window.clearCache();

    await document.querySelector('sw-main').render();
    document.documentElement.style.backgroundImage = BACKGROUND;
    document.body.style.display = 'flex';
};

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JLX1T7L4BB');