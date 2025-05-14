// location tab module

// nakamichi store image
import nakaStoreFront from "../images/nakastorefront.jpg";
const nakaStoreFrontImg = document.createElement("img");
nakaStoreFrontImg.classList.add("nakaStoreFrontImg");
nakaStoreFrontImg.src = nakaStoreFront;
nakaStoreFrontImg.style.width = "500px";
nakaStoreFrontImg.style.height = "auto";

// theater square store image
import theaterStoreFront from "../images/theaterstorefront.jpg";
const theaterStoreFrontImg = document.createElement("img");
theaterStoreFrontImg.classList.add("theaterStoreFrontImg");
theaterStoreFrontImg.src = theaterStoreFront;
theaterStoreFrontImg.style.width = "500px";
theaterStoreFrontImg.style.height = "auto";

// showa street store image
import showaStoreFront from "../images/showastorefront.jpg";
const showaStoreFrontImg = document.createElement("img");
showaStoreFrontImg.classList.add("showaStoreFrontImg");
showaStoreFrontImg.src = showaStoreFront;
showaStoreFrontImg.style.width = "500px";
showaStoreFrontImg.style.height = "auto";

// shofukucho street store image
import shofukuchoStoreFront from "../images/shofukuchostorefront.png";
const shofukuchoStoreFrontImg = document.createElement("img");
shofukuchoStoreFrontImg.classList.add("shofukuchoStoreFrontImg");
shofukuchoStoreFrontImg.src = shofukuchoStoreFront;
shofukuchoStoreFrontImg.style.width = "500px";
shofukuchoStoreFrontImg.style.height = "auto";

// downtown ryuku store image
import ryukuStoreFront from "../images/ryukustorefront.jpg";
const ryukuStoreFrontImg = document.createElement("img");
ryukuStoreFrontImg.classList.add("ryukuStoreFrontImg");
ryukuStoreFrontImg.src = ryukuStoreFront;
ryukuStoreFrontImg.style.width = "500px";
ryukuStoreFrontImg.style.height = "auto";

// ijincho store image
import ijinchoStoreFront from "../images/ijinchostorefront.jpg";
const ijinchoStoreFrontImg = document.createElement("img");
ijinchoStoreFrontImg.classList.add("ijinchoStoreFrontImg");
ijinchoStoreFrontImg.src = ijinchoStoreFront;
ijinchoStoreFrontImg.style.width = "500px";
ijinchoStoreFrontImg.style.height = "auto";

// function to create contact tab contents
export function createLocation() {
  const content = document.querySelector("#content");

  const locationHeader = document.createElement("h1");
  locationHeader.classList.add("locationHeader");
  locationHeader.textContent = "Locations";

  const locationInfo = document.createElement("div");
  locationInfo.classList.add("locationInfo");
  locationInfo.setAttribute("style", "white-space: pre; font-size: 18px;");
  locationInfo.textContent =
    "Wherever you are, there's always a Smile Burger near you!\r\n";
  locationInfo.textContent +=
    "Conveniently located in Kamurocho, Sotenbori, Okinawa, and Yokohama.\r\n";
  locationInfo.textContent += "Keep an eye out for our new food trucks!";

  // kamurocho locations
  const kamurochoLocations = document.createElement("h2");
  kamurochoLocations.classList.add("kamurochoLocations");
  kamurochoLocations.textContent = "Kamurocho Locations";

  const nakamichiSt = document.createElement("h3");
  nakamichiSt.classList.add("nakamichiSt");
  nakamichiSt.textContent = "Nakamichi Street Smile Burger";

  const nakamichiInfo = document.createElement("div");
  locationInfo.classList.add("nakamichiInfo");
  nakamichiInfo.setAttribute("style", "white-space: pre;");
  nakamichiInfo.textContent = "XXX Nakamichi Street\r\n";
  nakamichiInfo.textContent += "+X XXX XXX XXXX";

  const theaterSquare = document.createElement("h3");
  theaterSquare.classList.add("theaterSquare");
  theaterSquare.textContent = "NW Theater Square Smile Burger";

  const theaterSquareInfo = document.createElement("div");
  theaterSquareInfo.classList.add("theaterSquareInfo");
  theaterSquareInfo.setAttribute("style", "white-space: pre;");
  theaterSquareInfo.textContent = "XXX Theater Square\r\n";
  theaterSquareInfo.textContent += "+X XXX XXX XXXX";

  const showaSt = document.createElement("h3");
  showaSt.classList.add("showaSt");
  showaSt.textContent = "Showa Street Smile Burger";

  const showaInfo = document.createElement("div");
  showaInfo.classList.add("showaInfo");
  showaInfo.setAttribute("style", "white-space: pre;");
  showaInfo.textContent = "XXX Showa Street\r\n";
  showaInfo.textContent += "+X XXX XXX XXXX";

  // sotenbori locations
  const sotenboriLocations = document.createElement("h2");
  sotenboriLocations.classList.add("sotenboriLocations");
  sotenboriLocations.textContent = "Sotenbori Locations";

  const shofukuchoEast = document.createElement("h3");
  shofukuchoEast.classList.add("shofukuchoEast");
  shofukuchoEast.textContent = "Shofukucho East Smile Burger";

  const shofukuchoInfo = document.createElement("div");
  shofukuchoInfo.classList.add("shofukuchoInfo");
  shofukuchoInfo.setAttribute("style", "white-space: pre;");
  shofukuchoInfo.textContent = "XXX Shofukucho East\r\n";
  shofukuchoInfo.textContent += "+X XXX XXX XXXX";

  // okinawa locations
  const okinawaLocations = document.createElement("h2");
  okinawaLocations.classList.add("okinawaLocations");
  okinawaLocations.textContent = "Okinawa Locations";

  const downtownRyuku = document.createElement("h3");
  downtownRyuku.classList.add("downtownRyuku");
  downtownRyuku.textContent = "Downtown Ryuku Smile Burger";

  const ryukuInfo = document.createElement("div");
  ryukuInfo.classList.add("ryukuInfo");
  ryukuInfo.setAttribute("style", "white-space: pre;");
  ryukuInfo.textContent = "XXX Downtown Ryuku\r\n";
  ryukuInfo.textContent += "+X XXX XXX XXXX";

  // yokohama locations
  const yokohamaLocations = document.createElement("h2");
  yokohamaLocations.classList.add("yokohamaLocations");
  yokohamaLocations.textContent = "Yokohama Locations";

  const daikokutenSt = document.createElement("h3");
  daikokutenSt.classList.add("daikokutenSt");
  daikokutenSt.textContent = "Daikokuten Street Smile Burger Food Truck";

  const daikokutenInfo = document.createElement("div");
  daikokutenInfo.classList.add("daikokutenInfo");
  daikokutenInfo.setAttribute("style", "white-space: pre;");
  daikokutenInfo.textContent = "XXX Daikokuten Street\r\n";
  daikokutenInfo.textContent += "+X XXX XXX XXXX";

  content.appendChild(locationHeader);
  content.appendChild(document.createElement("br"));
  content.appendChild(locationInfo);
  content.appendChild(document.createElement("br"));
  content.appendChild(kamurochoLocations);
  content.appendChild(document.createElement("hr"));
  content.appendChild(nakaStoreFrontImg);
  content.appendChild(nakamichiSt);
  content.appendChild(nakamichiInfo);
  content.appendChild(document.createElement("br"));
  content.appendChild(theaterStoreFrontImg);
  content.appendChild(theaterSquare);
  content.appendChild(theaterSquareInfo);
  content.appendChild(document.createElement("br"));
  content.appendChild(showaStoreFrontImg);
  content.appendChild(document.createElement("br"));
  content.appendChild(showaSt);
  content.appendChild(showaInfo);
  content.appendChild(document.createElement("br"));
  content.appendChild(sotenboriLocations);
  content.appendChild(document.createElement("hr"));
  content.appendChild(shofukuchoStoreFrontImg);
  content.appendChild(document.createElement("br"));
  content.appendChild(shofukuchoEast);
  content.appendChild(shofukuchoInfo);
  content.appendChild(document.createElement("br"));
  content.appendChild(okinawaLocations);
  content.appendChild(document.createElement("hr"));
  content.appendChild(ryukuStoreFrontImg);
  content.appendChild(document.createElement("br"));
  content.appendChild(downtownRyuku);
  content.appendChild(ryukuInfo);
  content.appendChild(document.createElement("br"));
  content.appendChild(yokohamaLocations);
  content.appendChild(document.createElement("hr"));
  content.appendChild(ijinchoStoreFrontImg);
  content.appendChild(daikokutenSt);
  content.appendChild(daikokutenInfo);
  content.appendChild(document.createElement("br"));
  content.appendChild(document.createElement("br"));
}
