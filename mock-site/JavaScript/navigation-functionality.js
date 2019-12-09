/**
 * @author Don (dl90)
 * @date December 7, 2019
 * @copyright https://github.com/dl90
 * 
 * Adds basic navigation functionality to all liked pages.
 */

document.getElementById("home-button").onclick = function () {
  location.href = "home.html";
};

document.getElementById("news-button").onclick = function () {
  location.href = "news.html";
}

document.getElementById("game-button").onclick = function () {
  location.href = "game.html";
}

document.getElementById("form-button").onclick = function () {
  location.href = "form.html";
}

document.getElementById("about-button").onclick = function () {
  location.href = "about-us.html";
}

document.querySelector(".header-logo").onclick = function () {
  location.href = "landing.html";
}