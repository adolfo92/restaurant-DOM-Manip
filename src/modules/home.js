import writeMethis from "./tools/articleWriter";
import rozzPhoto from "../img/bands/RozzWilliamsHomepage.webp";

const article = {
  main: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

function homeLoader() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const title = document.createElement("h1");
  title.textContent = "Welcome";
  title.classList.add("title");

  const description = document.createElement("div");
  description.classList.add("description");
  description.classList.add("card");

  description.appendChild(writeMethis(article.main, "homeArticle"));

  const rozzWilliams = new Image();
  rozzWilliams.src = rozzPhoto;
  rozzWilliams.classList.add("homePhoto");
  description.appendChild(rozzWilliams);

  wrapper.appendChild(title);
  wrapper.appendChild(description);

  console.log("Home.js check");

  return wrapper;
}

export default homeLoader;
