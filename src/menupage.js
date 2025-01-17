export function loadMenuPage() {
  const contentDiv = document.querySelector("#content");
  const menuTextDiv = document.createElement("div");
  menuTextDiv.classList.add("menu-section");
  const headerPara1 = document.createElement("h1");
  const headerPara2 = document.createElement("h1");

  contentDiv.innerHTML = "";

  const timingDiv = document.createElement("div");
  timingDiv.classList.add("schedule-div");
  timingDiv.style.display = "flex";

  const scheduleArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // display text in scheduleArray and append in timingDiv
  for (let i = 0; i < scheduleArray.length; i++) {
    // create text element and append each days

    // Make it Accordian flush type and Button type
    const header2 = document.createElement("h2");
    header2.classList.add("schedule-block");
    header2.textContent = scheduleArray[i];
    timingDiv.appendChild(header2);
  }

  headerPara1.textContent = "Put Menu here";
  headerPara2.textContent = "List all menu and use ul & li";

  menuTextDiv.appendChild(timingDiv);
  menuTextDiv.appendChild(headerPara1);
  menuTextDiv.appendChild(headerPara2);
  contentDiv.appendChild(menuTextDiv);
}
