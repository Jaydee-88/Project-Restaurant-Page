export function loadAboutPage() {
  const contentDiv = document.querySelector("#content");
  const aboutTextDiv = document.createElement("div");

  contentDiv.innerHTML = "";
  const headerPara1 = document.createElement("h1");
  const headerPara2 = document.createElement("h1");

  contentDiv.innerHTML = "";

  headerPara1.textContent = "Created by Jevriel Dolbert";
  headerPara2.textContent = "Future Software Developer";

  aboutTextDiv.appendChild(headerPara1);
  aboutTextDiv.appendChild(headerPara2);
  contentDiv.appendChild(aboutTextDiv);
}
