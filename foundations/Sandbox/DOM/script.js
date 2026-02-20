// your JavaScript file
const container = document.querySelector("#container");


const content = document.createElement("div");

content.classList.add("content");
content.textContent = "This is the glorious text-content! From js file!";

const paragraph = document.createElement("p");

content.classList.add("paragraph");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!"

const newHeader = document.createElement("h3");

content.classList.add("newHeader");
newHeader.style.color = "blue";
newHeader.textContent = "I'm a blue h3!";

const newDiv = document.createElement("div");
newDiv.setAttribute('style', 'border: black solid; background-color: pink;');

    const inHeader = document.createElement("h1");
    inHeader.textContent = "I am in a div";
    const inParagraph = document.createElement("p");
    inParagraph.textContent = "ME TOO!!";

    newDiv.appendChild(inHeader);
    newDiv.appendChild(inParagraph);


const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(newHeader);
container.appendChild(newDiv);