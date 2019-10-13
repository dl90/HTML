/*
Don Li
*/

const userInputForm = document.querySelector("#word-form");
userInputForm.addEventListener("submit", countLetters);

function countLetters(event) {
    event.preventDefault();

    const wordToCount = document.querySelector("#word-input").value;
    const letterList = document.querySelector("#letter-list");

    let obj = {};

    for(let i = 0; i < wordToCount.length; i++) {
        if (obj[wordToCount[i]] === undefined) {
            obj[wordToCount[i]] = 1;
            
        } else if (obj[wordToCount[i]]) {
            obj[wordToCount[i]] += 1;
        }
    }

    letterList.innerText = "";
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    for(const [key, value] of Object.entries(obj) ) {
        //console.log(key + " = " + value);

        const newList = document.createElement("li");
        newList.innerText = "\""+ key + "\"" + " : " + value;
        letterList.appendChild(newList);
    }  
}