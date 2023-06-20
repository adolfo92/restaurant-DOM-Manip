function homeLoader() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const title = document.createElement("h1");
  title.textContent = "Mr. Spagetthi";
  title.classList.add("title");

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = "You will never forgetti";

  const mrSpagetthiPhoto = new Image();
  /*mrSpagetthiPhoto.src = pastaLaVista;
  mrSpagetthiPhoto.classList.add("homePhoto");*/

  wrapper.appendChild(title);
  wrapper.appendChild(description);

  console.log("Home.js check");

  return wrapper;
}

export default homeLoader;
