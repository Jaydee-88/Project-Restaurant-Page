export function loadContactUsPage() {
  const contentDiv = document.querySelector("#content");
  const contactTextDiv = document.createElement("div");

  contentDiv.innerHTML = "";
  const headerPara1 = document.createElement("h1");

  contentDiv.innerHTML = "";

  headerPara1.textContent = "Contact us";
  headerPara1.classList.add("header--contacts");

  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-section--contacts");
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-div--contacts");

  const contactList = [
    {
      name: "Jevriel",
      number: "0521750759",
      address: "Philippines, Manila",
      email: "cabalojd@gmail.com",
    },
    {
      name: "Fauna",
      number: "0236721554",
      address: "Canada, Ottawa",
      email: "fauna@hololive.com",
    },
    {
      name: "Masayoshi",
      number: "0425667347",
      address: "Japan, Tokyo",
      email: "masayoshi@gmail.com",
    },
  ];

  function addDropShadow(element) {
    // Create a new span for the shadow text
    const shadowText = document.createElement("span");
    shadowText.textContent = element.textContent;

    // Apply styles for drop shadow
    shadowText.style.position = "absolute";
    shadowText.style.color = "rgb(0, 0, 0)"; // Shadow color
    shadowText.style.left = "2px"; // Offset for shadow
    shadowText.style.top = "2px"; // Offset for shadow
    shadowText.style.pointerEvents = "none"; // Prevent interaction with shadow
    shadowText.style.zIndex = "-1"; // Place behind original text

    // Ensure the parent has a relative position
    element.style.position = "relative";

    // Append the shadow text to the original element
    element.appendChild(shadowText);
  }

  contactList.forEach((el) => {
    const contactBlock = document.createElement("div");
    contactBlock.classList.add("contact-block--contacts");

    const contactName = document.createElement("h1");
    const contactNumber = document.createElement("h3");
    const contactAddress = document.createElement("h3");
    const contactEmail = document.createElement("h3");

    contactName.textContent = el.name;
    contactNumber.textContent = el.number;
    contactAddress.textContent = el.address;
    contactEmail.textContent = el.email;

    addDropShadow(contactName);
    contactBlock.appendChild(contactName);
    contactBlock.appendChild(contactNumber);
    contactBlock.appendChild(contactAddress);
    contactBlock.appendChild(contactEmail);
    contactSection.appendChild(contactBlock);
  });

  contactSection.appendChild(contactDiv);

  contactTextDiv.appendChild(headerPara1);
  contentDiv.appendChild(contactTextDiv);
  contentDiv.appendChild(contactSection);
}
