const buttons = document.querySelectorAll(".button");
const answerElement = document.querySelector("#answer");
const inputElement = document.querySelector("#input");
let inputArr = [];
let equationArr = [];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let numString = "";
    
    inputArr.push( button.innerText );
    inputElement.innerText += button.innerText;

    for (let element of inputArr) {

        if( isNaN(element) === false ) { 
            numString = numString + element; 
        } else { 
            equationArr.push(numString);
            numString = "";
        }
      
        if ( isNaN(element) && element !== "enter" ) {
            numString = "";
            equationArr.push(element);
            //resets inputArr
            inputArr = [];
        }

        if ( element === "enter" ) {
            let answer = calculateValues(equationArr);
            answerElement.innerText = answer;
            //resets
            inputArr = [];
            equationArr = [];
            inputElement.innerText = "";
        }
    }

    console.log(inputArr);
    //console.log(equationArr);
  });
});

function calculateValues (arr) {
    let result = parseInt(arr[0]);

    for(let i = 1; i < arr.length; i++ ) {
        //console.log(result);
        //console.log(arr[i]);
        //console.log(arr);
        
        if ( isNaN(arr[i])) {

            if (arr[i] === "+" ) {
                result = result + parseInt(arr[i+1]);
                i = i++;
            }
            
            if (arr[i] === "-" ) {
                result = result - parseInt(arr[i+1]);
                i = i++;
            }
        }
    }
    return result;
}