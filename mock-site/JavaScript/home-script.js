/**
 * @author Don (dl90)
 * @date December 7, 2019
 * @copyright https://github.com/dl90
 * 
 * Adds play and pause functionality for game background video
 */

const audioPlayer = document.querySelector("#audio-player");
const button1 = document.querySelector("#song-1");
const button2 = document.querySelector("#song-2");
const button3 = document.querySelector("#song-3");
const button4 = document.querySelector("#song-4");
const button5 = document.querySelector("#song-5");

button1.addEventListener("click", () => {
  audioPlayer.setAttribute("src", "./Assets/Music/Crowfall-OST_Combat_Loop.wav");
  audioPlayer.play();
})
button2.addEventListener("click", () => {
  audioPlayer.setAttribute("src", "./Assets/Music/Crowfall-OST_Exploration.wav");
  audioPlayer.play();
})
button3.addEventListener("click", () => {
  audioPlayer.setAttribute("src", "./Assets/Music/Crowfall-OST_ZombieSwords_Destruction.wav");
  audioPlayer.play();
})
button4.addEventListener("click", () => {
  audioPlayer.setAttribute("src", "./Assets/Music/Crowfall-OST_ZombieSwords_Theme.wav");
  audioPlayer.play();
})
button5.addEventListener("click", () => {
  audioPlayer.setAttribute("src", "./Assets/Music/Crowfall-OST_ZombieSwords_Time.wav");
  audioPlayer.play();
})

const userID = document.querySelector(".username-field");
const userPW = document.querySelector(".password-field");
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if(userID.value === "root" && userPW.value === "toor") {
    alert("Hello Admin");
    window.location.href = "./admin.html";
  } else {
    alert("Account does not exist");
  }
  loginForm.reset();
})