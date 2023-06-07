import pageLoader from "./modules/page-load.js";

const load = pageLoader;

const contentDiv = document.querySelector("#content");

contentDiv.appendChild(load("home"));
