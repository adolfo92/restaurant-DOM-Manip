import pageLoader from "./modules/page-load.js";

const contentDiv = document.querySelector("#content");

const load = pageLoader;
const navBar = document.createElement("nav");

contentDiv.appendChild(navBar);

contentDiv.appendChild(load("home"));
