/**
 * @author Don (dl90)
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
  location.href = "about.html";
}

document.querySelector(".header-logo").onclick = function () {
  location.href = "landing.html";
}