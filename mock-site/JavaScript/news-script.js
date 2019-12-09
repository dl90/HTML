/**
 * @author Don (dl90)
 * @date December 7, 2019
 * @copyright https://github.com/dl90
 * 
 * Adds sliding menu functionality
 */

const weekMenu = document.getElementsByClassName("week-menu");

// https://www.w3schools.com/howto/howto_js_collapsible.asp
for (let i = 0; i < weekMenu.length; i++) {
  weekMenu[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}