export default function contact() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.classList.add("contactWrapper");

  const paragraph = document.createElement("p");
  paragraph.textContent = "Website made by Adolfo Castro for The Odin project";
  paragraph.classList.add("contactP");

  const paragraph2 = document.createElement("p");
  paragraph2.textContent = "Leave me a message!";
  paragraph2.classList.add("contactP");
  paragraph2.classList.add("messageInv");

  const FORM = document.createElement("form");
  FORM.action = "";
  FORM.method = "post";
  const fname = document.createElement("input");
  fname.placeholder = "Your name";
  fname.name = "name";
  fname.type = "text";

  const fmail = document.createElement("input");
  fmail.name = "e-mail";
  fmail.type = "email";
  fmail.placeholder = "Your e-mail";

  const ftext = document.createElement("textarea");
  ftext.placeholder = "Your wonderful text";
  ftext.name = "message";
  ftext.cols = 50;
  ftext.rows = 10;

  const fbutton = document.createElement("button");
  fbutton.value = "Submit";
  fbutton.type = "submit";
  fbutton.textContent = "Submit";
  fbutton.addEventListener("click", (e) => e.preventDefault());

  FORM.appendChild(fname);
  FORM.appendChild(fmail);
  FORM.appendChild(ftext);
  FORM.appendChild(fbutton);

  wrapper.appendChild(paragraph);
  wrapper.appendChild(paragraph2);
  wrapper.appendChild(FORM);

  console.log("contact check");
  return wrapper;
}
