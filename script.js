// 1. grab the element from the DOM
const h1 = document.getElementById("title");
// 2. Change the element properties
h1.style.backgroundColor = "orange";
h1.style.padding = "20px";
h1.style.color = "#fff";
h1.style.fontSize = "60px";
console.log(h1);
console.dir(h1); // explore the properties of element

// function addStyles(element) {
//   element.style.backgroundColor = "purple";
//   element.style.padding = "20px";
//   element.style.color = "#fff";
//   element.style.fontSize = "64px";
//   return element;
// }
// addStyles(h1);

// using CSS Selectors to query an element
const pEl = document.querySelector(".cool");
console.log(pEl);
// querySelector -> return a single element
const h2 = document.querySelector("h2");
console.log(h2);
// querySelectorAll -> returns all matching elements
const allH2 = document.querySelectorAll("h2");
console.log(allH2);
