import writeMethis from "./tools/articleWriter";
import rozzPhoto from "../img/bands/RozzWilliamsHomepage.webp";

// Import tools
import cardMaker from "./tools/cardMaker";

const article = {
  main: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

function homeLoader() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const title = document.createElement("h1");
  title.textContent = "Welcome";
  title.classList.add("title");

  wrapper.appendChild(title);
  wrapper.appendChild(
    cardMaker(
      null,
      null,
      article.main,
      "homeArticle",
      rozzPhoto,
      "homePhoto",
      "description"
    )
  );

  console.log("Home.js check");

  return wrapper;
}

export default homeLoader;
