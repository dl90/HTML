console.log("testy test");

var titleClicked = document.querySelector("#question-text");
titleClicked.addEventListener("click", test);

function test() {
    console.log("testy test");
}


var newGame = document.querySelector("#new-game");
newGame.addEventListener("click", generateNewGame);

function generateNewGame() {
    event.preventDefault();

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let number2 = getRandomIntInclusive(0, 10);
    let number1 = getRandomIntInclusive(0, 10);

    var questionNew = `What is ${number1} + ${number2}?`;
    const newGameEqu = document.querySelector("#question-text");
    newGameEqu.innerText = questionNew;

    const result = document.querySelector("#result")
    result.innerText = "";

    return rightAnswer = number1 + number2;

}

var answer = document.querySelector("#answer-form");
answer.addEventListener("submit", checkInput);


function checkInput(event) {
    event.preventDefault();

    const userAnswer = document.querySelector("#answer-input");
    const answer1 = parseInt(userAnswer.value);
    const result = document.querySelector("#result")
    const myElement = document.querySelector("#result");

    if (answer1 == rightAnswer) {
        result.innerText = "Correct 🤗";
        //myElement.classList.remove("result");
        myElement.classList.remove("bad");
        myElement.classList.add("good");
    } else {
        result.innerText = "Incorrect 💩";
        //myElement.classList.remove("result");
        myElement.classList.remove("good");
        myElement.classList.add("bad"); //class name doesnt need #
    }

}


