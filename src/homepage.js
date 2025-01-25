export function loadHomePage() {
  const contentDiv = document.querySelector("#content");
  const homeButton = document.querySelector("#home");

  contentDiv.innerHTML = "";
  homeButton.className = "buttonActive";
  const heroTextDiv = document.createElement("div");
  const headerPara1 = document.createElement("h1");
  const headerPara2 = document.createElement("h1");
  const heroButton = document.createElement("button");

  const descriptionDiv = document.createElement("div");
  const descriptionText = document.createElement("p");

  descriptionText.textContent =
    "Welcome to Neko's Coffee Shop, a cozy haven for cat lovers and coffee enthusiasts alike! Nestled in a charming corner of the city, our cafe features a warm, inviting atmosphere where you can sip on expertly crafted beverages while enjoying the company of our playful resident cats. With comfortable seating, a selection of delicious pastries, and a range of specialty coffees, Neko's is the perfect spot to relax, unwind, and connect with both furry friends and fellow cat aficionados. Join us for a unique experience that combines the love of coffee and the joy of cats";
  descriptionDiv.appendChild(descriptionText);
  descriptionDiv.classList.add("description-div--home");

  headerPara1.textContent = "Where Every Sip Comes with a Purr!";
  heroTextDiv.appendChild(headerPara1);
  heroTextDiv.classList.add("heroText");
  heroButton.textContent = "Book Now";
  heroButton.classList.add("hero-button--home");

  contentDiv.appendChild(heroTextDiv);
  contentDiv.appendChild(descriptionDiv);
  contentDiv.appendChild(heroButton);
}
