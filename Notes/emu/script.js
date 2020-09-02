// get the thing
const title = document.querySelector("#title");

// get information from the thing
console.log(title.innerText);

// interaction with the user, clicks, searches (events)
let counter = 0;
function respondToClick() {
  counter++;
  // console.log(`${title.innerText} clicked: ${counter}`);
  console.log("Emu Facts clicked: " + counter);

  // update the thing
  title.innerText = "Emu Facts clicked: " + counter;
}
title.addEventListener('click', respondToClick);

// update the html 
const form = document.querySelector("#input-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("submitted");

  const emuFactInput = document.querySelector("#emu-fact");
  const fact = emuFactInput.value;

  console.log(fact);
  alert(fact);

});