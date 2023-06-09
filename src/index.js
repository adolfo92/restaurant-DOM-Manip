import pageLoader from "./modules/page-load.js";

const contentDiv = document.querySelector("#content");

const load = pageLoader;
const navBar = document.createElement("nav");

const navbarItems = ["home", "contact", "memes"];
for (let i = 0; i < navbarItems.length; i++) {
  const navItem = document.createElement("div");
  navItem.classList.add(navbarItems[i]);
  navItem.textContent =
    navbarItems[i].charAt(0).toUpperCase() + navbarItems[i].slice(1);
  navBar.appendChild(navItem);
}
contentDiv.appendChild(navBar);
contentDiv.appendChild(load("home"));
