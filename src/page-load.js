// page load function
// also functions as home tab module (?)

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const content = document.querySelector("#content");
const footer = document.querySelector("#footer");

import largeLogo from "../images/smilelogo2.png";
const smilelogo = document.createElement("img");
smilelogo.classList.add("smilelogo");
smilelogo.onclick = () => {
  content.textContent = "";
  createHome();
};
smilelogo.src = largeLogo;

const slogan = document.createElement("h3");
slogan.classList.add("slogan");
slogan.textContent = "We love your smile!";

const credit = document.createElement("div");
credit.classList.add("credit");
credit.textContent =
  "Smile Burger name and associated images belong to Sega/RGG Studios.";

export function createHome() {
  const homeHeader = document.createElement("h1");
  homeHeader.classList.add("homeHeader");
  homeHeader.textContent = "Smile Burger";

  const blurb = document.createElement("div");
  blurb.classList.add("blurb");
  blurb.setAttribute("style", "white-space: pre;");
  blurb.textContent =
    "A fast food chain that offers some of the best-tasting burgers in town.\r\n";
  blurb.textContent += "\r\n";
  blurb.textContent += "We deliver a smile with each quality meal\r\n";
  blurb.textContent += "wherever our stores may be found or trucks may roam.";
  blurb.style.fontSize = "18px";

  const hoursContainer = document.createElement("div");
  hoursContainer.classList.add("hoursContainer");

  const hoursHeader = document.createElement("h2");
  hoursHeader.classList.add("hoursHeader");
  hoursHeader.textContent = "Hours";

  const hoursInfo = document.createElement("div");
  hoursInfo.classList.add("hoursInfo");
  hoursInfo.setAttribute("style", "white-space: pre;");
  hoursInfo.textContent = "Sunday: 8am - 1am\r\n";
  hoursInfo.textContent += "Monday: 6am - 2am\r\n";
  hoursInfo.textContent += "Tuesday: 6am - 2am\r\n";
  hoursInfo.textContent += "Wednesday: 6am - 2am\r\n";
  hoursInfo.textContent += "Thursday: 6am - 2am\r\n";
  hoursInfo.textContent += "Friday: 6am - 2am\r\n";
  hoursInfo.textContent += "Saturday: 7am - 3am\r\n";
  hoursInfo.style.fontSize = "18px";

  header.insertBefore(smilelogo, nav);
  header.insertBefore(slogan, nav);
  content.appendChild(homeHeader);
  content.appendChild(blurb);
  content.appendChild(hoursHeader);
  content.appendChild(document.createElement("hr"));
  content.appendChild(hoursContainer);
  hoursContainer.appendChild(document.createElement("br"));
  hoursContainer.appendChild(hoursInfo);
  footer.appendChild(credit);
}
