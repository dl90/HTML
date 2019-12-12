(() => {
  const candyCanvas = document.querySelector("#candy_canvas")

  let context = candyCanvas.getContext('2d')
  context.strokeStyle = "rebeccapurple"
  context.lineWidth = 10 

  let x = 10

  document.addEventListener('click', function() {
    context.beginPath()
    context.moveTo(x, 10)
    context.lineTo(x, 200)
    context.stroke()
    x += 50
  })


})()