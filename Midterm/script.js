const submit = document.querySelector("#submit-button");
const form = document.querySelector("#form");

//both submit and form works
//submit.addEventListener("click", newPost);
form.addEventListener("submit", newPost);

function newPost(event) {
  event.preventDefault();

  const squeak = document.createElement("div");
  squeak.classList.add("squeak");

  const userName = document.querySelector("#user-name");
  const userMessage = document.querySelector("#user-message");

  if (userName.value.length > 0 && userMessage.value.length > 0) {

    const squeakUsername = document.createElement("p");
    squeakUsername.classList.add("squeak-username");
    squeakUsername.innerText = squeak.appendChild(squeakUsername);
    squeakUsername.innerText = userName.value;

    const squeakMessage = document.createElement("p");
    squeakMessage.classList.add("squeak-message");
    squeakMessage.innerText = squeak.appendChild(squeakMessage);
    squeakMessage.innerText = userMessage.value;

    document.querySelector("#all-squeaks").appendChild(squeak);

    console.log(userName.value);
    console.log(userMessage.value);

    //https://stackoverflow.com/questions/20416803/how-do-i-clear-the-previous-text-field-value-after-submitting-the-form-with-out
    document.forms["form"].reset();

    //https://stackoverflow.com/questions/8773921/how-to-automatically-scroll-down-a-html-page
    document.getElementById("footer-block").scrollIntoView();

  }

}