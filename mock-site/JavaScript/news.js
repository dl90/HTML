/**
 * @author Don (dl90)
 * Adds sliding menu functionality
 */

const weekMenu = document.getElementsByClassName("week-menu");

for (let i = 0; i < weekMenu.length; i++) {
  weekMenu[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}