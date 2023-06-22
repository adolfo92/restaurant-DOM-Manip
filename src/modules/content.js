// ----- Image import
import christianDeath from "../img/bands/christianDeath.webp";
import alienSF from "../img/bands/alienSexFiend.jpg";
import grave45 from "../img/bands/45Grave.jpeg";
import eatYM from "../img/bands/eatYM.JPEG";
import carnic from "../img/bands/Los_Carniceros.jpg";
// ----- Tools
import writeMethis from "./tools/articleWriter";
import cardMaker from "./tools/cardMaker";

const articles = {
  article1: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

function content() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.classList.add("bandsWrapper");
  wrapper.appendChild(
    cardMaker("Christian Death", articles.article1.text, christianDeath)
  );
  wrapper.appendChild(cardMaker("45Grave", articles.article1.text, grave45));
  wrapper.appendChild(
    cardMaker("Alien Sex Fiend", articles.article1.text, alienSF)
  );
  wrapper.appendChild(
    cardMaker("Eat Your Make-up", articles.article1.text, eatYM)
  );
  wrapper.appendChild(
    cardMaker("Los Carniceros del norte", articles.article1.text, carnic)
  );

  console.log("content check");
  return wrapper;
}

export default content;
