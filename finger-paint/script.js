const canvas = document.querySelector("#canvas-box");
const slider = document.querySelector("#brush-width");
const sliderValue = document.querySelector("#slider-value");
const context = canvas.getContext("2d");


window.addEventListener('DOMContentLoaded', (event) => {
  // console.log(getRandomColor());
});

slider.oninput = function() {
  sliderValue.innerHTML = this.value;
  console.log(this.value);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



// //copy paste
let isDrawing = false;
// let xDown = 0;
// let yDown = 0;
// let xMove = 0;
// let yMove = 0;

let x = 0;
let y = 0;

// const myPics = document.getElementById('myPics');
// const context = myPics.getContext('2d');

// The x and y offset of the canvas from the edge of the page
const rect = canvas.getBoundingClientRect();
console.log(rect);

canvas.addEventListener("mousedown", event => {
  x = event.clientX - rect.left;
  y = event.clientY - rect.top;

  isDrawing = true;
  console.log("click at:")
  console.log(x + ' : ' + y)
})

// // Add the event listeners for mousedown, mousemove, and mouseup
// myPics.addEventListener('mousedown', e => {
//   x = e.clientX - rect.left;
//   y = e.clientY - rect.top;
//   isDrawing = true;
// });

canvas.addEventListener("mousemove", event => {
  if(isDrawing) {
    draw(context, x, y, event.clientX - rect.left, event.clientY - rect.top);
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
    console.log(x + " - " + y);
  }
})

// myPics.addEventListener('mousemove', e => {
//   if (isDrawing === true) {
//     drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
//     x = e.clientX - rect.left;
//     y = e.clientY - rect.top;
//   }
// });

canvas.addEventListener("mouseup", event => {
  if(isDrawing) {
    draw(context, x, y, event.clientX - rect.left, event.clientY - rect.top);
    isDrawing = false;
  }
})

// window.addEventListener('mouseup', e => {
//   if (isDrawing === true) {
//     drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
//     x = 0;
//     y = 0;
//     isDrawing = false;
//   }
// });

function draw(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = getRandomColor();
  context.lineWidth = parseInt(sliderValue.textContent);
  // context.moveTo(0, 0);
  // context.lineTo(0, 0);
  // context.stroke();

  context.moveTo(x1, y1);
  context.lineTo(x2, y2)
  context.stroke();
  context.closePath();
}

// function drawLine(context, x1, y1, x2, y2) {
//   context.beginPath();
//   context.strokeStyle = 'black';
//   context.lineWidth = 1;
//   context.moveTo(x1, y1);
//   context.lineTo(x2, y2);
//   context.stroke();
//   context.closePath();
// }