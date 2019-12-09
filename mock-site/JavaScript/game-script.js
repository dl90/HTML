/**
 * @author Don (dl90)
 * @date December 7, 2019
 * @copyright https://github.com/dl90
 * 
 * Adds play and pause functionality for game background video
 */

const backgroundVideo = document.getElementById("background-video");

backgroundVideo.addEventListener("click", (event) => {
 playPause();
})


// https://www.w3schools.com/jsref/event_onscroll.asp
window.onscroll = function() { scrollOut() };
function scrollOut() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backgroundVideo.pause();
  }
}

function playPause() {
  if (backgroundVideo.paused) {
    backgroundVideo.play();
  } else {
    backgroundVideo.pause();
  }
}