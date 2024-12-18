import "./styles.css";
import { loadHomePage } from "./homepage.js";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
const contactUsButton = document.querySelector("#contactUs");

console.log("hello");
window.onload = loadHomePage;
