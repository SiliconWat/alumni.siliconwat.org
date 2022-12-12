import "/components/sw-header/element.mjs";

import "/components/sw-main/sw-home/element.mjs";
import "/components/sw-main/sw-scoreboard/element.mjs";
import "/components/sw-main/element.mjs";

import "/components/sw-footer/element.mjs";

import { BACKGROUND } from "/global.mjs";
window.onload = async () => {
    //if (!window.TESTING) window.clearCache();
    
    await document.querySelector('sw-main').render();
    document.documentElement.style.backgroundImage = BACKGROUND;
    document.body.style.display = 'flex';
};

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JLX1T7L4BB');