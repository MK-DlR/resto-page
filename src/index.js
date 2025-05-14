// index.js
import "./page-load.js";
import "./styles.css";
import { createHome } from "./page-load.js";
import { createMenu } from "./menu.js";
import { createLocation } from "./location.js";
import { createContact } from "./contact.js";

const homeBtn = document.getElementById("homeBtn");
const locationBtn = document.getElementById("locationBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

createHome();

// switch to home tab
homeBtn.addEventListener("click", function () {
  console.log("I'm the home page button!");
  content.textContent = ""; // erase current page content
  createHome(); // call function to create home tab
});

// switch to menu tab
menuBtn.addEventListener("click", function () {
  console.log("I'm the menu page button!");
  content.textContent = ""; // erase current page content
  createMenu(); // call function to create menu tab
});

// switch to location tab
locationBtn.addEventListener("click", function () {
  console.log("I'm the location page button!");
  content.textContent = ""; // erase current page content
  createLocation(); // call function to create location tab
});

// switch to contact tab
contactBtn.addEventListener("click", function () {
  console.log("I'm the contact page button!");
  content.textContent = ""; // erase current page content
  createContact(); // call function to create contact tab
});
