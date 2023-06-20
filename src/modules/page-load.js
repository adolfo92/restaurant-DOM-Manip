import home from "./home.js";
import memes from "./memesMenu";
import contact from "./contact";

function pageRender(status) {
  console.log("page render check");

  if (status === "home") return home();
  if (status === "memes") return memes();
  if (status === "contact") return contact();
}

export default pageRender;
