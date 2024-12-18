import "./styles.css";
import { loadHomePage } from "./homepage.js";

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
const contactUsButton = document.querySelector("#contactUs");
const navButtons = document.querySelectorAll("nav button");

contentDiv.innerHTML = "";

// make a class that defaults load the home button. then the rest out blank and load their respective JS scripts.

menuButton.addEventListener("click", (e) => {
  console.log("clicked");
  navButtons.forEach((el) => {
    el.classList.remove("buttonActive");
  });
  menuButton.className = "buttonActive";
});
loadHomePage();
