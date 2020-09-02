const newGameButton = document.querySelector("#new-game");
newGameButton.addEventListener("click", newGame);

const notification = document.querySelector("#guess-help");


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randNum;

function newGame(event) {
  event.preventDefault();

  //reset group color
  notification.classList.remove("right");
  notification.classList.remove("high");
  notification.classList.remove("low");


  randNum = getRandomIntInclusive(0, 10);

  const instructions = document.querySelector("#guess-help");
  instructions.innerText = "Guess a number between 0 and 10";

}


const userInput = document.querySelector("#guess-form");
userInput.addEventListener("submit", check);

function check(event) {
  event.preventDefault();
  const userAnswer = document.querySelector("#guess-input");
  const intAnswer = parseInt(userAnswer.value);
  const notification = document.querySelector("#guess-help");

  //console.log(intAnswer);
  //console.log(randNum);

  if (intAnswer === randNum) {
    notification.innerText = "You got it!";
    notification.classList.remove("right");
    notification.classList.remove("high");
    notification.classList.remove("low");
    notification.classList.add("right");

  } else if (intAnswer > randNum) {
    notification.innerText = intAnswer + " is too high!";
    notification.classList.remove("right");
    notification.classList.remove("high");
    notification.classList.remove("low");
    notification.classList.add("high");

  } else if (intAnswer < randNum) {
    notification.innerText = intAnswer + " is too low!";
    notification.classList.remove("right");
    notification.classList.remove("high");
    notification.classList.remove("low");
    notification.classList.add("low");

  }

}