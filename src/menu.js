// menu tab module
import { createMajimaSide } from "./sideofmajima.js";

// menu item images
// smile burger
import smileBurger from "../images/menu/smileburger.png";
const smileBurgerImg = document.createElement("img");
smileBurgerImg.classList.add("smileBurgerImg");
smileBurgerImg.src = smileBurger;
smileBurgerImg.style.width = "auto";
smileBurgerImg.style.height = "150px";

// teriyaki burger
import teriyakiBurger from "../images/menu/teriyakiburger.png";
const teriyakiBurgerImg = document.createElement("img");
teriyakiBurgerImg.classList.add("smileBurgerImg");
teriyakiBurgerImg.src = teriyakiBurger;
teriyakiBurgerImg.style.width = "auto";
teriyakiBurgerImg.style.height = "150px";

// king smile burger
import kingSmileBurger from "../images/menu/kingsmileburger.png";
const kingSmileBurgerImg = document.createElement("img");
kingSmileBurgerImg.classList.add("kingSmileBurger");
kingSmileBurgerImg.src = kingSmileBurger;
kingSmileBurgerImg.style.width = "auto";
kingSmileBurgerImg.style.height = "150px";

// tuna burger
import tunaBurger from "../images/menu/tunaburger.png";
const tunaBurgerImg = document.createElement("img");
tunaBurgerImg.classList.add("tunaBurgerImg");
tunaBurgerImg.src = tunaBurger;
tunaBurgerImg.style.width = "auto";
tunaBurgerImg.style.height = "150px";

// braised pork burger
import braisedPorkBurger from "../images/menu/braisedporkburger.png";
const braisedPorkBurgerImg = document.createElement("img");
braisedPorkBurgerImg.classList.add("braisedPorkBurgerImg");
braisedPorkBurgerImg.src = braisedPorkBurger;
braisedPorkBurgerImg.style.width = "auto";
braisedPorkBurgerImg.style.height = "150px";

// millennium tower burger
import millTowerBurger from "../images/menu/milltowerburger.png";
const millTowerBurgerImg = document.createElement("img");
millTowerBurgerImg.classList.add("millTowerBurgerImg");
millTowerBurgerImg.src = millTowerBurger;
millTowerBurgerImg.style.width = "auto";
millTowerBurgerImg.style.height = "150px";

// smile set
import smileBurgerSet from "../images/menu/smileburgerset.png";
const smileBurgerSetImg = document.createElement("img");
smileBurgerSetImg.classList.add("smileBurgerSetImg");
smileBurgerSetImg.src = smileBurgerSet;
smileBurgerSetImg.style.width = "auto";
smileBurgerSetImg.style.height = "150px";

// teriyaki set
import teriyakiBurgerSet from "../images/menu/teriyakiburgerset.png";
const teriyakiBurgerSetImg = document.createElement("img");
teriyakiBurgerSetImg.classList.add("teriyakiBurgerSetImg");
teriyakiBurgerSetImg.src = teriyakiBurgerSet;
teriyakiBurgerSetImg.style.width = "auto";
teriyakiBurgerSetImg.style.height = "150px";

// king smile set
import kingSmileSet from "../images/menu/kingsmileburgerset.png";
const kingSmileSetImg = document.createElement("img");
kingSmileSetImg.classList.add("kingSmileSetImg");
kingSmileSetImg.src = kingSmileSet;
kingSmileSetImg.style.width = "auto";
kingSmileSetImg.style.height = "150px";

// tuna burger set
import tunaBurgerSet from "../images/menu/tunaburgerset.png";
const tunaBurgerSetImg = document.createElement("img");
tunaBurgerSetImg.classList.add("tunaBurgerSetImg");
tunaBurgerSetImg.src = tunaBurgerSet;
tunaBurgerSetImg.style.width = "auto";
tunaBurgerSetImg.style.height = "150px";

// braised pork burger set
import braisedPorkSet from "../images/menu/braisedporkburgerset.png";
const braisedPorkSetImg = document.createElement("img");
braisedPorkSetImg.classList.add("braisedPorkSetImg");
braisedPorkSetImg.src = braisedPorkSet;
braisedPorkSetImg.style.width = "auto";
braisedPorkSetImg.style.height = "150px";

// legendary smile set
import legendarySmileSet from "../images/menu/legendarysmileset.png";
const legendarySmileSetImg = document.createElement("img");
legendarySmileSetImg.classList.add("legendarySmileSetImg");
legendarySmileSetImg.src = legendarySmileSet;
legendarySmileSetImg.style.width = "autp";
legendarySmileSetImg.style.height = "150px";

// smile fries
import smileFries from "../images/menu/smilefries.png";
const smileFriesImg = document.createElement("img");
smileFriesImg.classList.add("smileFriesImg");
smileFriesImg.src = smileFries;
smileFriesImg.style.width = "auto";
smileFriesImg.style.height = "150px";

// smile shake
import smileShake from "../images/menu/smileshake.png";
const smileShakeImg = document.createElement("img");
smileShakeImg.classList.add("smileShakeImg");
smileShakeImg.src = smileShake;
smileShakeImg.style.width = "auto";
smileShakeImg.style.height = "150px";

// smile salad
import smileSalad from "../images/menu/smilesalad.png";
const smileSaladImg = document.createElement("img");
smileSaladImg.classList.add("smileSaladImg");
smileSaladImg.src = smileSalad;
smileSaladImg.style.width = "auto";
smileSaladImg.style.height = "150px";

// function to create menu tab contents
export function createMenu() {
  const content = document.querySelector("#content");

  const menuHeader = document.createElement("h1");
  menuHeader.classList.add("menuHeader");
  menuHeader.textContent = "Menu";

  const menuContent = document.createElement("div");
  menuContent.classList.add("menuContent");
  menuContent.setAttribute("style", "white-space: pre;");
  menuContent.style.fontSize = "18px";
  menuContent.textContent =
    "At Smile Burger, there's always something for everyone!\r\n";
  menuContent.textContent +=
    "Stop in for a meal or pick up something to go.\r\n";
  menuContent.textContent += "\r\n";
  menuContent.textContent += "Now offering the new Millennium Tower Burger!";

  // menu nav links
  const burgersLink = document.createElement("a");
  burgersLink.classList.add("burgersLink");
  burgersLink.style.fontSize = "20px";
  burgersLink.textContent = "Burgers";
  burgersLink.style.marginRight = "5px"; // adds space between links
  burgersLink.href = "#burgers"; // anchor link to jump to burgers section

  const setsLink = document.createElement("a");
  setsLink.classList.add("setsLink");
  setsLink.style.fontSize = "20px";
  setsLink.textContent = "Sets";
  setsLink.style.marginRight = "5px"; // adds space between links
  setsLink.href = "#sets"; // anchor link to jump to burgers section

  const sidesLink = document.createElement("a");
  sidesLink.classList.add("sidesLink");
  sidesLink.style.fontSize = "20px";
  sidesLink.textContent = "Sides & Drinks";
  sidesLink.href = "#sides"; // anchor link to jump to burgers section

  // menu container
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");

  // burgers section
  const burgersSection = document.createElement("h2");
  burgersSection.classList.add("burgersSection");
  burgersSection.textContent = "Burgers";
  burgersSection.id = "burgers"; // assign ID for anchor link

  // main burger container
  const burgerContainer = document.createElement("div");
  burgerContainer.classList.add("burgerContainer");

  // left burger container
  const lBurgerContainer = document.createElement("div");
  lBurgerContainer.classList.add("lBurgerContainer");

  // right burger container
  const rBurgerContainer = document.createElement("div");
  rBurgerContainer.classList.add("rBurgerContainer");

  // smile burger
  const smileBurgerName = document.createElement("h3");
  smileBurgerName.classList.add("smileBurgerName");
  smileBurgerName.textContent = "Smile Burger";

  const smileBurgerPrice = document.createElement("div");
  smileBurgerPrice.classList.add("smileBurgerPrice");
  smileBurgerPrice.textContent = "330¥";
  smileBurgerPrice.style.fontWeight = "bold";

  const smileBurgerAbout = document.createElement("div");
  smileBurgerAbout.classList.add("smileBurgerAbout");
  smileBurgerAbout.setAttribute("style", "white-space: pre;");
  smileBurgerAbout.textContent = "The original hamburger, known as\r\n";
  smileBurgerAbout.textContent += "Kamurocho's go-to fast food for years.";

  // teriyaki burger
  const teriyakiBurgerName = document.createElement("h3");
  teriyakiBurgerName.classList.add("teriyakiBurgerName");
  teriyakiBurgerName.textContent = "Teriyaki Burger";

  const teriyakiBurgerPrice = document.createElement("div");
  teriyakiBurgerPrice.classList.add("teriyakiBurgerPrice");
  teriyakiBurgerPrice.textContent = "580¥";
  teriyakiBurgerPrice.style.fontWeight = "bold";

  const teriyakiBurgerAbout = document.createElement("div");
  teriyakiBurgerAbout.classList.add("teriyakiBurgerAbout");
  teriyakiBurgerAbout.setAttribute("style", "white-space: pre;");
  teriyakiBurgerAbout.textContent = "A burger made with grilled teriyaki\r\n";
  teriyakiBurgerAbout.textContent += "chicken breast.";

  // king smile burger
  const kingSmileBurgerName = document.createElement("h3");
  kingSmileBurgerName.classList.add("kingSmileBurgerName");
  kingSmileBurgerName.textContent = "King Smile Burger";

  const kingSmileBurgerPrice = document.createElement("div");
  kingSmileBurgerPrice.classList.add("kingSmileBurgerPrice");
  kingSmileBurgerPrice.textContent = "690¥";
  kingSmileBurgerPrice.style.fontWeight = "bold";

  const kingSmileBurgerAbout = document.createElement("div");
  kingSmileBurgerAbout.classList.add("kingSmileBurgerAbout");
  kingSmileBurgerAbout.setAttribute("style", "white-space: pre;");
  kingSmileBurgerAbout.textContent = "A hamburger fit for a king, made\r\n";
  kingSmileBurgerAbout.textContent += "with double the meat.";

  // tuna burger
  const tunaBurgerName = document.createElement("h3");
  tunaBurgerName.classList.add("tunaBurgerName");
  tunaBurgerName.textContent = "Tuna Burger";

  const tunaBurgerPrice = document.createElement("div");
  tunaBurgerPrice.classList.add("tunaBurgerPrice");
  tunaBurgerPrice.textContent = "580¥";
  tunaBurgerPrice.style.fontWeight = "bold";

  const tunaBurgerAbout = document.createElement("div");
  tunaBurgerAbout.classList.add("tunaBurgerAbout");
  tunaBurgerAbout.setAttribute("style", "white-space: pre;");
  tunaBurgerAbout.textContent = "A healthy fish burger made\r\n";
  tunaBurgerAbout.textContent += "with a tuna patty.";

  // braised pork burger
  const braisedPorkBurgerName = document.createElement("h3");
  braisedPorkBurgerName.classList.add("braisedPorkBurgerName");
  braisedPorkBurgerName.textContent = "Braised Pork Burger";

  const braisedPorkBurgerPrice = document.createElement("div");
  braisedPorkBurgerPrice.classList.add("braisedPorkBurgerPrice");
  braisedPorkBurgerPrice.textContent = "600¥";
  braisedPorkBurgerPrice.style.fontWeight = "bold";

  const braisedPorkBurgerAbout = document.createElement("div");
  braisedPorkBurgerAbout.classList.add("braisedPorkBurgerAbout");
  braisedPorkBurgerAbout.setAttribute("style", "white-space: pre;");
  braisedPorkBurgerAbout.textContent = "The meat on this burger is stewed\r\n";
  braisedPorkBurgerAbout.textContent +=
    "until tender and served on a fresh, warm bun.";

  // millenium tower burger
  const millTowerBurgerName = document.createElement("h3");
  millTowerBurgerName.classList.add("millTowerBurgerName");
  millTowerBurgerName.textContent = "Millennium Tower Burger";

  const millTowerBurgerPrice = document.createElement("div");
  millTowerBurgerPrice.classList.add("millTowerBurgerPrice");
  millTowerBurgerPrice.textContent = "650¥";
  millTowerBurgerPrice.style.fontWeight = "bold";

  const millTowerBurgerAbout = document.createElement("div");
  millTowerBurgerAbout.classList.add("millTowerBurgerAbout");
  millTowerBurgerAbout.setAttribute("style", "white-space: pre;");
  millTowerBurgerAbout.textContent = "A limited-edition hamburger with\r\n";
  millTowerBurgerAbout.textContent +=
    "a skyscraper of patties and an explosion of flavor.";

  // sets section
  const setsSection = document.createElement("h2");
  setsSection.classList.add("setsSection");
  setsSection.textContent = "Sets";
  setsSection.id = "sets"; // assign ID for anchor link

  // main sets container
  const setsContainer = document.createElement("div");
  setsContainer.classList.add("setsContainer");

  // left sets container
  const lSetsContainer = document.createElement("div");
  lSetsContainer.classList.add("lSetsContainer");

  // right sets container
  const rSetsContainer = document.createElement("div");
  rSetsContainer.classList.add("rSetsContainer");

  // smile burger set
  const smileBurgerSetName = document.createElement("h3");
  smileBurgerSetName.classList.add("smileBurgerSetName");
  smileBurgerSetName.textContent = "Smile Burger Set";

  const smileBurgerSetPrice = document.createElement("div");
  smileBurgerSetPrice.classList.add("smileBurgerSetPrice");
  smileBurgerSetPrice.textContent = "520¥";
  smileBurgerSetPrice.style.fontWeight = "bold";

  const smileBurgerSetAbout = document.createElement("div");
  smileBurgerSetAbout.classList.add("smileBurgerSetAbout");
  smileBurgerSetAbout.setAttribute("style", "white-space: pre;");
  smileBurgerSetAbout.textContent = "Our standard burger set, with\r\n";
  smileBurgerSetAbout.textContent += "a Smile burger, fries, and a beverage.";

  // teriyaki burger set
  const teriyakiBurgerSetName = document.createElement("h3");
  teriyakiBurgerSetName.classList.add("teriyakiBurgerSetName");
  teriyakiBurgerSetName.textContent = "Teriyaki Burger Set";

  const teriyakiBurgerSetPrice = document.createElement("div");
  teriyakiBurgerSetPrice.classList.add("teriyakiBurgerSetPrice");
  teriyakiBurgerSetPrice.textContent = "770¥";
  teriyakiBurgerSetPrice.style.fontWeight = "bold";

  const teriyakiBurgerSetAbout = document.createElement("div");
  teriyakiBurgerSetAbout.classList.add("teriyakiBurgerSetAbout");
  teriyakiBurgerSetAbout.setAttribute("style", "white-space: pre;");
  teriyakiBurgerSetAbout.textContent =
    "This set includes a teriyaki Smile burger with\r\n";
  teriyakiBurgerSetAbout.textContent += "special sauce, fries, and a beverage.";

  // king smile burger set
  const kingSmileSetName = document.createElement("h3");
  kingSmileSetName.classList.add("kingSmileSetName");
  kingSmileSetName.textContent = "King Smile Burger Set";

  const kingSmileSetPrice = document.createElement("div");
  kingSmileSetPrice.classList.add("kingSmileSetPrice");
  kingSmileSetPrice.textContent = "880¥";
  kingSmileSetPrice.style.fontWeight = "bold";

  const kingSmileSetAbout = document.createElement("div");
  kingSmileSetAbout.classList.add("kingSmileSetAbout");
  kingSmileSetAbout.setAttribute("style", "white-space: pre;");
  kingSmileSetAbout.textContent = "This famous set comes with\r\n";
  kingSmileSetAbout.textContent += "a King Smile burger, fries, and a drink.";

  // tuna burger set
  const tunaBurgerSetName = document.createElement("h3");
  tunaBurgerSetName.classList.add("tunaBurgerSetName");
  tunaBurgerSetName.textContent = "Tuna Burger Set";

  const tunaBurgerSetPrice = document.createElement("div");
  tunaBurgerSetPrice.classList.add("tunaBurgerSetPrice");
  tunaBurgerSetPrice.textContent = "770¥";
  tunaBurgerSetPrice.style.fontWeight = "bold";

  const tunaBurgerSetAbout = document.createElement("div");
  tunaBurgerSetAbout.classList.add("tunaBurgerSetAbout");
  tunaBurgerSetAbout.setAttribute("style", "white-space: pre;");
  tunaBurgerSetAbout.textContent = "A tasty tuna burger with a unique \r\n";
  tunaBurgerSetAbout.textContent +=
    "texture, fries, and a drink come with this set.";

  // braised pork burger set
  const braisedPorkSetName = document.createElement("h3");
  braisedPorkSetName.classList.add("braisedPorkSetName");
  braisedPorkSetName.textContent = "Braised Pork Burger Set";

  const braisedPorkSetPrice = document.createElement("div");
  braisedPorkSetPrice.classList.add("braisedPorkSetPrice");
  braisedPorkSetPrice.textContent = "790¥";
  braisedPorkSetPrice.style.fontWeight = "bold";

  const braisedPorkSetAbout = document.createElement("div");
  braisedPorkSetAbout.classList.add("braisedPorkSetAbout");
  braisedPorkSetAbout.setAttribute("style", "white-space: pre;");
  braisedPorkSetAbout.textContent = "A tender, braised pork burger\r\n";
  braisedPorkSetAbout.textContent += "with fries and a drink.";

  // legendary smile set
  const legendarySmileSetName = document.createElement("h3");
  legendarySmileSetName.classList.add("legendarySmileSetName");
  legendarySmileSetName.textContent = "Legendary Smile Set";

  const legendarySmileSetPrice = document.createElement("div");
  legendarySmileSetPrice.classList.add("legendarySmileSetPrice");
  legendarySmileSetPrice.textContent = "1000¥";
  legendarySmileSetPrice.style.fontWeight = "bold";

  const legendarySmileSetAbout = document.createElement("div");
  legendarySmileSetAbout.classList.add("legendarySmileSetAbout");
  legendarySmileSetAbout.setAttribute("style", "white-space: pre;");
  legendarySmileSetAbout.textContent =
    "A full combo ready to destroy your stomach with\r\n";
  legendarySmileSetAbout.textContent +=
    "a double patty burger, french fries, nuggets, and a drink.";

  // sides section
  const sidesSection = document.createElement("h2");
  sidesSection.classList.add("sidesSection");
  sidesSection.textContent = "Sides & Drinks";
  sidesSection.id = "sides"; // assign ID for anchor link

  // main sides container
  const sidesContainer = document.createElement("div");
  sidesContainer.classList.add("sidesContainer");

  // left sides container
  const lSidesContainer = document.createElement("div");
  lSidesContainer.classList.add("lSidesContainer");

  // right sides container
  const rSidesContainer = document.createElement("div");
  rSidesContainer.classList.add("rSidesContainer");

  // smile fries
  const smileFriesName = document.createElement("h3");
  smileFriesName.classList.add("smileFriesName");
  smileFriesName.textContent = "Smile Fries";

  const smileFriesPrice = document.createElement("div");
  smileFriesPrice.classList.add("smileFriesPrice");
  smileFriesPrice.textContent = "250¥";
  smileFriesPrice.style.fontWeight = "bold";

  const smileFriesAbout = document.createElement("div");
  smileFriesAbout.classList.add("smileFriesAbout");
  smileFriesAbout.setAttribute("style", "white-space: pre;");
  smileFriesAbout.textContent =
    "The golden-fried standard of french fries,\r\n";
  smileFriesAbout.textContent += "served with a smile.";

  // smile salad
  const smileSaladName = document.createElement("h3");
  smileSaladName.classList.add("smileSaladName");
  smileSaladName.textContent = "Smile Salad";

  const smileSaladPrice = document.createElement("div");
  smileSaladPrice.classList.add("smileSaladPrice");
  smileSaladPrice.textContent = "300¥";
  smileSaladPrice.style.fontWeight = "bold";

  const smileSaladAbout = document.createElement("div");
  smileSaladAbout.classList.add("smileSaladAbout");
  smileSaladAbout.setAttribute("style", "white-space: pre;");
  smileSaladAbout.textContent =
    "Choosing the healthy alternative to a burger\r\n";
  smileSaladAbout.textContent += "is always something to smile about.";

  // smile shake
  const smileShakeName = document.createElement("h3");
  smileShakeName.classList.add("smileShakeName");
  smileShakeName.textContent = "Smile Shake";

  const smileShakePrice = document.createElement("div");
  smileShakePrice.classList.add("smileShakePrice");
  smileShakePrice.textContent = "220¥";
  smileShakePrice.style.fontWeight = "bold";

  const smileShakeAbout = document.createElement("div");
  smileShakeAbout.classList.add("smileShakeAbout");
  smileShakeAbout.setAttribute("style", "white-space: pre;");
  smileShakeAbout.textContent = "A cool, refreshing treat.\r\n";
  smileShakeAbout.textContent +=
    "It's especially popular in the summer months.";

  // side of majima
  const questionMarkText = document.createElement("h1");
  questionMarkText.classList.add("questionMarkText");
  questionMarkText.textContent = "?";
  questionMarkText.onclick = () => {
    content.textContent = "";
    createMajimaSide();
  };

  const questionMarkName = document.createElement("h3");
  questionMarkName.classList.add("questionMarkName");
  questionMarkName.textContent = "Side of 真島";

  const questionMarkPrice = document.createElement("div");
  questionMarkPrice.classList.add("questionMarkPrice");
  questionMarkPrice.textContent = "000¥";
  questionMarkPrice.style.fontWeight = "bold";

  const questionMarkAbout = document.createElement("div");
  questionMarkAbout.classList.add("questionMarkAbout");
  questionMarkAbout.setAttribute("style", "white-space: pre;");
  questionMarkAbout.textContent = "The Kiryu-chan special,\r\n";
  questionMarkAbout.textContent += "order if you dare!";

  // menu blurb and nav links
  content.appendChild(menuHeader);
  content.appendChild(document.createElement("br"));
  content.appendChild(burgersLink);
  content.appendChild(setsLink);
  content.appendChild(sidesLink);
  content.appendChild(document.createElement("br"));
  content.appendChild(document.createElement("br"));
  content.appendChild(menuContent);
  content.appendChild(document.createElement("br"));
  // menu container
  content.appendChild(menuContainer);
  // burgers section
  menuContainer.appendChild(document.createElement("br"));
  menuContainer.appendChild(burgersSection);
  menuContainer.appendChild(document.createElement("hr"));
  menuContainer.appendChild(burgerContainer);
  burgerContainer.appendChild(lBurgerContainer);
  burgerContainer.appendChild(rBurgerContainer);
  // smile burger
  lBurgerContainer.appendChild(smileBurgerImg);
  lBurgerContainer.appendChild(smileBurgerName);
  lBurgerContainer.appendChild(smileBurgerAbout);
  lBurgerContainer.appendChild(smileBurgerPrice);
  lBurgerContainer.appendChild(document.createElement("br"));
  // teriyaki burger
  lBurgerContainer.appendChild(teriyakiBurgerImg);
  lBurgerContainer.appendChild(teriyakiBurgerName);
  lBurgerContainer.appendChild(teriyakiBurgerAbout);
  lBurgerContainer.appendChild(teriyakiBurgerPrice);
  lBurgerContainer.appendChild(document.createElement("br"));
  // king smile burger
  lBurgerContainer.appendChild(kingSmileBurgerImg);
  lBurgerContainer.appendChild(kingSmileBurgerName);
  lBurgerContainer.appendChild(kingSmileBurgerAbout);
  lBurgerContainer.appendChild(kingSmileBurgerPrice);
  lBurgerContainer.appendChild(document.createElement("br"));
  // tuna burger
  rBurgerContainer.appendChild(tunaBurgerImg);
  rBurgerContainer.appendChild(tunaBurgerName);
  rBurgerContainer.appendChild(tunaBurgerAbout);
  rBurgerContainer.appendChild(tunaBurgerPrice);
  rBurgerContainer.appendChild(document.createElement("br"));
  // braised pork burger
  rBurgerContainer.appendChild(braisedPorkBurgerImg);
  rBurgerContainer.appendChild(braisedPorkBurgerName);
  rBurgerContainer.appendChild(braisedPorkBurgerAbout);
  rBurgerContainer.appendChild(braisedPorkBurgerPrice);
  rBurgerContainer.appendChild(document.createElement("br"));
  // millennium tower burger
  rBurgerContainer.appendChild(millTowerBurgerImg);
  rBurgerContainer.appendChild(millTowerBurgerName);
  rBurgerContainer.appendChild(millTowerBurgerAbout);
  rBurgerContainer.appendChild(millTowerBurgerPrice);
  rBurgerContainer.appendChild(document.createElement("br"));
  // sets section
  menuContainer.appendChild(setsSection);
  menuContainer.appendChild(document.createElement("hr"));
  menuContainer.appendChild(setsContainer);
  setsContainer.appendChild(lSetsContainer);
  setsContainer.appendChild(rSetsContainer);
  // smile burger set
  lSetsContainer.appendChild(smileBurgerSetImg);
  lSetsContainer.appendChild(smileBurgerSetName);
  lSetsContainer.appendChild(smileBurgerSetAbout);
  lSetsContainer.appendChild(smileBurgerSetPrice);
  lSetsContainer.appendChild(document.createElement("br"));
  // teriyaki burger set
  lSetsContainer.appendChild(teriyakiBurgerSetImg);
  lSetsContainer.appendChild(teriyakiBurgerSetName);
  lSetsContainer.appendChild(teriyakiBurgerSetAbout);
  lSetsContainer.appendChild(teriyakiBurgerSetPrice);
  lSetsContainer.appendChild(document.createElement("br"));
  // king smile burger set
  lSetsContainer.appendChild(kingSmileSetImg);
  lSetsContainer.appendChild(kingSmileSetName);
  lSetsContainer.appendChild(kingSmileSetAbout);
  lSetsContainer.appendChild(kingSmileSetPrice);
  lSetsContainer.appendChild(document.createElement("br"));
  // tuna burger set
  rSetsContainer.appendChild(tunaBurgerSetImg);
  rSetsContainer.appendChild(tunaBurgerSetName);
  rSetsContainer.appendChild(tunaBurgerSetAbout);
  rSetsContainer.appendChild(tunaBurgerSetPrice);
  rSetsContainer.appendChild(document.createElement("br"));
  // braised pork burger set
  rSetsContainer.appendChild(braisedPorkSetImg);
  rSetsContainer.appendChild(braisedPorkSetName);
  rSetsContainer.appendChild(braisedPorkSetAbout);
  rSetsContainer.appendChild(braisedPorkSetPrice);
  rSetsContainer.appendChild(document.createElement("br"));
  // legendary smile set
  rSetsContainer.appendChild(legendarySmileSetImg);
  rSetsContainer.appendChild(legendarySmileSetName);
  rSetsContainer.appendChild(legendarySmileSetAbout);
  rSetsContainer.appendChild(legendarySmileSetPrice);
  rSetsContainer.appendChild(document.createElement("br"));
  // sides section
  menuContainer.appendChild(sidesSection);
  menuContainer.appendChild(document.createElement("hr"));
  menuContainer.appendChild(sidesContainer);
  sidesContainer.appendChild(lSidesContainer);
  sidesContainer.appendChild(rSidesContainer);
  // smile fries
  lSidesContainer.appendChild(smileFriesImg);
  lSidesContainer.appendChild(smileFriesName);
  lSidesContainer.appendChild(smileFriesAbout);
  lSidesContainer.appendChild(smileFriesPrice);
  lSidesContainer.appendChild(document.createElement("br"));
  // smile salad
  lSidesContainer.appendChild(smileSaladImg);
  lSidesContainer.appendChild(smileSaladName);
  lSidesContainer.appendChild(smileSaladAbout);
  lSidesContainer.appendChild(smileSaladPrice);
  content.appendChild(document.createElement("br"));
  // smile shake
  rSidesContainer.appendChild(smileShakeImg);
  rSidesContainer.appendChild(smileShakeName);
  rSidesContainer.appendChild(smileShakeAbout);
  rSidesContainer.appendChild(smileShakePrice);
  rSidesContainer.appendChild(document.createElement("br"));
  // side of majima
  rSidesContainer.appendChild(questionMarkText);
  rSidesContainer.appendChild(questionMarkName);
  rSidesContainer.appendChild(questionMarkAbout);
  rSidesContainer.appendChild(questionMarkPrice);
  content.appendChild(document.createElement("br"));
}
