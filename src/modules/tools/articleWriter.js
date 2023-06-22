export default function writeMethis(text, identification) {
  const container = document.createElement("div");
  container.classList.add("writingCard");

  if (identification) {
    container.classList.add(identification);
  }

  function DETECT_LINE_BREAKS(someText) {
    // Busca \n y me separas el texto en un array de parrafos
    let paragraphArray = someText.split("\n");

    for (let i = 0; i < paragraphArray.length; i++) {
      // Crea el parrafo
      const paragraph = document.createElement("p");
      // Agrega la clase
      if (identification) {
        paragraph.classList.add(identification);
      }
      // Agrega al parrafo el texto en la posicion del array actual
      paragraph.textContent = paragraphArray[i];

      //Metele el parrato al contenedor
      container.appendChild(paragraph);

      //Si no estamos en el final del array, introduce un salto de linea en el documento
      if (i < paragraphArray.length - 1) {
        const linebreak = document.createElement("br");
        container.appendChild(linebreak);
      }
    }
  }

  DETECT_LINE_BREAKS(text);

  return container;
}
