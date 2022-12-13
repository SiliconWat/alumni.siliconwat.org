export const ORIGIN = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5650" : "https://showcase.siliconwat.org";
export const THONLY = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5500" : "https://thonly.org";
export const UNIVERSITY = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5610" : "https://siliconwat.com";

export const BACKGROUND = "radial-gradient(circle at bottom left, hsla(161, 80%, 45%, 1) 0%, hsla(215, 80%, 45%, 1) 100%)";

export async function getData(url) {
    let cache = localStorage.getItem(url);
    if (cache) {
        return JSON.parse(cache);
    } else {
        try {
            cache = await (await fetch(url, { cache: "no-store" })).json();
        } catch(error) {
            cache = {};
        }
        localStorage.setItem(url, JSON.stringify(cache))
        return cache;
    }  
}