import home from "./home.js";
import content from "./content.js";
import contact from "./contact";

function pageRender(status) {
  console.log("page render check");

  if (status === "home") return home();
  if (status === "content") return content();
  if (status === "contact") return contact();
}

export default pageRender;
