//const posts = require("./posts.js");
//console.log(posts);

const submitComments = document.querySelectorAll('.comment-form');
//const submitComment = document.querySelector('.comment-form');

submitComments.forEach(submitComment => {

  submitComment.addEventListener("submit", event=>{
    event.preventDefault();
    newComment();
  });

  const newComment = () => {

    const commentText = submitComment.parentElement.querySelector(".post-comment").value;

    const allCommentPosts = submitComment.parentElement.parentElement.querySelector('.all-comment-posts');
    const newComment = document.createElement('li');
    newComment.setAttribute('class', 'comment-post');

    allCommentPosts.appendChild(newComment);

    //user icon
    const userIcon = document.createElement('i');
    userIcon.setAttribute('class', "user-display-pic");
    newComment.appendChild(userIcon);

    //comment section
    const newCommentText = document.createElement('p');
    newCommentText.setAttribute('class', 'post-text');
    newCommentText.innerHTML= commentText;
    newComment.appendChild(newCommentText);
  }

});