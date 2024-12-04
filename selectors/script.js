// traverse the DOM

//Par element
// var parent = document.querySelector('ul');
// var p = parent.parentElement;
// console.log(p);

//previous element siblings
// console.log(document.querySelector(".hero").previousElementSibling);

//children
// var child = document.querySelector('ul');

// console.log(child.children);
// console.log(child.childNodes);

//append child
// const ul = document.querySelector("ul");
// const newE = document.createElement("li");
// newE.textContent = "Vaidya";
// ul.appendChild(newE);

//remove child
// const ul = document.querySelector("ul");
// ul.remove();

// replace child
const list = document.querySelector("ul");
const childToChange = list.children[4];
const newLi = document.createElement("li");
newLi.textContent = "Harsh Beniwal";
list.replaceChild(newLi, childToChange);
