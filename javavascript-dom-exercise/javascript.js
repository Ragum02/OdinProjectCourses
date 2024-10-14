const container = document.querySelector("#container");

const paragraph = document.createElement("p")
paragraph.classList.add("paragraph");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!"


const blue = document.createElement("h3")
blue.classList.add("blue");
blue.style.color = "blue";
blue.textContent = "I'm a blue h3!"


const divBorder = document.createElement("div")
divBorder.classList.add("div-border");
divBorder.style.background = "pink";
divBorder.style.border = "black 1px solid";

const divTitle = document.createElement("h1")
const divText = document.createElement("p")

divTitle.textContent = "I'm in a div"
divText.textContent = "ME TOO!"

divBorder.appendChild(divTitle);
divBorder.appendChild(divText);
container.appendChild(divBorder);
container.appendChild(blue);
container.appendChild(paragraph);