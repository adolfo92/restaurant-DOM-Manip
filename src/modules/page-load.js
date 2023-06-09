import pastaMan from "../img/lostInSauce.jpg";
import home from "./home.js";

function pageRender(status) {
  console.log("page render check");

  if (status === "home") return home();
}

export default pageRender;
