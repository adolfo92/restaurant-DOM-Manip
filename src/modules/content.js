// ----- Image import
import christianDeath from "../img/bands/christianDeath.webp";
import alienSF from "../img/bands/alienSexFiend.jpg";
import grave45 from "../img/bands/45Grave.jpeg";
import eatYM from "../img/bands/eatYM.JPEG";
import carnic from "../img/bands/Los_Carniceros.jpg";
// ----- Tools

import cardMaker from "./tools/cardMaker";

const articles = {
  article1: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};
// Funcion para agregar a las cartas las clases respectivas a sus titulos, fotos y descripciones
function bandCardInvoker(Title, Text, PhotoSRC) {
  return cardMaker(
    Title,
    "bandTitle",
    Text,
    "bandText",
    PhotoSRC,
    "bandImage",
    "bandCard"
  );
}

function content() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.classList.add("bandsWrapper");
  wrapper.appendChild(
    bandCardInvoker("Christian Death", articles.article1.text, christianDeath)
  );
  wrapper.appendChild(
    bandCardInvoker("45Grave", articles.article1.text, grave45)
  );
  wrapper.appendChild(
    bandCardInvoker("Alien Sex Fiend", articles.article1.text, alienSF)
  );
  wrapper.appendChild(
    bandCardInvoker("Eat Your Make-up", articles.article1.text, eatYM)
  );
  wrapper.appendChild(
    bandCardInvoker("Los Carniceros del norte", articles.article1.text, carnic)
  );

  console.log("content check");
  return wrapper;
}

export default content;
