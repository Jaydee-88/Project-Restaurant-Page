export function loadMenuPage() {
  const contentDiv = document.querySelector("#content");
  const menuTextDiv = document.createElement("div");
  const headerPara1 = document.createElement("h1");
  const headerPara2 = document.createElement("h1");

  contentDiv.innerHTML = "";

  headerPara1.textContent = "Put Menu here";
  headerPara2.textContent = "List all menu and use ul & li";

  menuTextDiv.appendChild(headerPara1);
  menuTextDiv.appendChild(headerPara2);
  contentDiv.appendChild(menuTextDiv);
}
