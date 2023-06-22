import home from "./home.js";
import content from "./content.js";
import contact from "./contact";

function pageRender(status) {
  console.log("page render check");
  console.log(status);
  const navItems = document.querySelectorAll(".navItem");
  navItems.forEach((item) => item.classList.remove("active"));
  const active = document.querySelector(`.${status}`);
  active.classList.add("active");

  if (status === "home") return home();
  if (status === "content") return content();
  if (status === "contact") return contact();
}

export default pageRender;
