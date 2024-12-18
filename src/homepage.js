export function loadHomePage() {
  const contentDiv = document.querySelector("#content");
  const homeButton = document.querySelector("#home");

  contentDiv.innerHTML = "";
  homeButton.className = "buttonActive";
  const heroTextDiv = document.createElement("div");
  const headerPara1 = document.createElement("h1");
  const headerPara2 = document.createElement("h1");
  const heroButton = document.createElement("button");
  headerPara1.textContent = "Think, Plan, and Track";
  headerPara2.textContent = "all in one place";
  heroTextDiv.appendChild(headerPara1);
  heroTextDiv.appendChild(headerPara2);
  heroTextDiv.classList.add("heroText");
  heroButton.textContent = "Get Free Demo";

  contentDiv.appendChild(heroTextDiv);
  contentDiv.appendChild(heroButton);
}
