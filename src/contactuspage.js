export function loadContactUsPage() {
  const contentDiv = document.querySelector("#content");
  const contactTextDiv = document.createElement("div");

  contentDiv.innerHTML = "";
  const headerPara1 = document.createElement("h1");

  contentDiv.innerHTML = "";

  headerPara1.textContent = "Contact us";
  headerPara1.classList.add("header--contacts");

  const contactSection = document.createElement("section");
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-div--contacts");

  contactList = [
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
      address: "Canada, Ottawa",
      email: "masayoshi@gmail.com",
    },
  ];

  contactList.forEach((el) => {});

  contactSection.appendChild(contactDiv);

  contactTextDiv.appendChild(headerPara1);
  contentDiv.appendChild(contactTextDiv);
  contentDiv.appendChild(contactSection);
}
