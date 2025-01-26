import "./styles.css";
import "./styles/menu-page.css";
import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import { loadAboutPage } from "./aboutpage.js";
import { loadContactUsPage } from "./contactuspage.js";

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
const contactUsButton = document.querySelector("#contactUs");
const navButtons = document.querySelectorAll("nav button");

contentDiv.innerHTML = "";

// make a class that defaults load the home button. then the rest out blank and load their respective JS scripts.

// Central

navButtons.forEach((button) => {
  contentDiv.innerHTML = "";
  button.classList.remove("buttonActive");

  button.addEventListener("click", (e) => {
    navButtons.forEach((el) => {
      el.classList.remove("buttonActive");
    });

    if (button.id === "home") {
      homeButton.className = "buttonActive";
      console.log("home button clicked");
      loadHomePage();
    }

    if (button.id === "menu") {
      menuButton.className = "buttonActive";
      console.log("menu button clicked");
      loadMenuPage();
    }

    if (button.id === "about") {
      aboutButton.className = "buttonActive";
      console.log("about button clicked");
      loadAboutPage();
    }

    if (button.id === "contactUs") {
      contactUsButton.className = "buttonActive";
      console.log("contact us button clicked");
      loadContactUsPage();
    }
  });
});

loadHomePage();
