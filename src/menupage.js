export function loadMenuPage() {
  const contentDiv = document.querySelector("#content");
  const menuSection = document.createElement("div");
  menuSection.classList.add("menu-section");

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
    // const header2 = document.createElement("h2");
    // header2.classList.add("schedule-block");
    // header2.textContent = scheduleArray[i];
    // timingDiv.appendChild(header2);
  }

  const headerMenu = document.createElement("h1");
  headerMenu.textContent = "Coffee's";
  const coffeeLists = [
    { name: "Americano", price: "$19" },
    { name: "Espresso", price: "$29" },
    { name: "Cappuccino", price: "$18" },
    { name: "Latte", price: "$19" },
    { name: "Macchiato", price: "$29" },
    { name: "Flat White", price: "$29" },
    { name: "Mocha", price: "$18" },
    { name: "Matcha Latte", price: "$19" },
    { name: "Irish Coffee", price: "$29" },
    { name: "Turkish Coffee", price: "$29" },
  ];

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-block--menu");
  menuDiv.appendChild(headerMenu);

  coffeeLists.forEach((el) => {
    const coffeeName = document.createElement("p");
    const coffeePrice = document.createElement("p");
    const menuListDiv = document.createElement("div");
    const hr = document.createElement("hr");
    menuListDiv.classList.add("menu-list--menu");
    coffeeName.classList.add("coffee-name--menu");

    if (el.description) {
      console.log("if there is description");
    }

    hr.style.width = "100%";
    hr.style.opacity = "0.5";

    coffeeName.textContent = el.name;
    coffeePrice.textContent = el.price;

    menuListDiv.appendChild(coffeeName);
    menuListDiv.appendChild(coffeePrice);
    menuDiv.appendChild(menuListDiv);
    menuDiv.appendChild(hr);
  });

  menuSection.appendChild(timingDiv);
  menuSection.appendChild(menuDiv);
  contentDiv.appendChild(menuSection);
}
