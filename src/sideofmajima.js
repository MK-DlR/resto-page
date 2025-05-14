import majiBurger from "../majiburg.gif";
const majiBurgerGif = document.createElement("img");
majiBurgerGif.classList.add("majiBurgerGif");
majiBurgerGif.src = majiBurger;

export function createMajimaSide() {
  const content = document.querySelector("#content");

  content.appendChild(majiBurgerGif);
}
