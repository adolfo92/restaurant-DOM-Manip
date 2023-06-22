export default function writeMethis(text, identification) {
  const container = document.createElement("div");
  container.classList.add("writingCard");

  const paragraph = document.createElement("p");

  if (identification) {
    container.classList.add(identification);
    paragraph.classList.add(identification);
  }

  paragraph.textContent = text;

  container.appendChild(paragraph);

  return container;
}
