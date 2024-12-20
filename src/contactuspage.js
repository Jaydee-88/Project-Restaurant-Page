export function loadContactUsPage() {
  const contentDiv = document.querySelector("#content");
  const contactTextDiv = document.createElement("div");

  contentDiv.innerHTML = "";
  const headerPara1 = document.createElement("h1");
  const headerPara2 = document.createElement("h1");

  contentDiv.innerHTML = "";

  headerPara1.textContent = "Contact us at 0501234567";
  headerPara2.textContent = "Address: Jumeirah Beach Hotel Floor 26";

  contactTextDiv.appendChild(headerPara1);
  contactTextDiv.appendChild(headerPara2);
  contentDiv.appendChild(contactTextDiv);
}
