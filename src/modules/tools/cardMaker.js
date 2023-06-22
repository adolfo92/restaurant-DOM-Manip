import writeMethis from "./articleWriter";
export default function cardMaker(cardTitle, cardText, cardImageSrc) {
  const description = document.createElement("div");
  description.classList.add("bandCard");
  description.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = cardTitle;
  title.classList.add("bandTitle");

  const cardArticle = writeMethis(cardText, "bandDesc");

  const cardImage = new Image();
  cardImage.src = cardImageSrc;
  cardImage.classList.add("homePhoto");

  description.appendChild(title);
  description.appendChild(cardArticle);
  description.appendChild(cardImage);

  return description;
}
