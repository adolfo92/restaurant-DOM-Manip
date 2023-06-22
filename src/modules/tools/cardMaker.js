import writeMethis from "./articleWriter";
export default function cardMaker(
  cardTitle,
  cardTitleID,
  cardText,
  cardTextID,
  cardImageSrc,
  cardImageID,
  cardType
) {
  const description = document.createElement("div");
  description.classList.add(cardType);
  description.classList.add("card");

  if (cardTitle) {
    const title = document.createElement("h2");
    title.textContent = cardTitle;
    title.classList.add(cardTitleID);
    description.appendChild(title);
  }

  const cardArticle = writeMethis(cardText, cardTextID);

  const cardImage = new Image();
  cardImage.src = cardImageSrc;
  cardImage.classList.add(cardImageID);

  description.appendChild(cardArticle);
  description.appendChild(cardImage);

  return description;
}
