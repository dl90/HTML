/**
 * @author Don (dl90)
 * https://www.w3schools.com/w3css/w3css_slideshow.asp
 */

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("hero-image");
  var dots = document.getElementsByClassName("dots");

  if (n > x.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = x.length
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  //resets selected-dot class
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" selected-dot", "");
  }

  x[slideIndex-1].style.display = "block";
  //sets selected-dot class
  dots[slideIndex-1].className += " selected-dot";
}