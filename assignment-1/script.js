const playButton = document.querySelectorAll(".track-play-button");
const iframe = document.createElement('iframe');

playButton.forEach(buttons => {
    buttons.addEventListener('click', function (event) {
    event.preventDefault();

    iframe.setAttribute("src", "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "250px");
    document.querySelector(".iframe-container").appendChild(iframe);
})});