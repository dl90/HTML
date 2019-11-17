const Post = document.querySelector('#post-form');

Post.addEventListener('submit', event => {
  event.preventDefault();

  const newPosts = document.querySelector('#post-form');
  const postUserName = newPosts.querySelector('[name=user-name]').value;
  const postImageUrl = newPosts.querySelector('[name=image-url]').value;
  const postImageComment = newPosts.querySelector('[name=image-comment]').value;
  const postContainer = document.querySelector('.post-container');

  //creating new post
  const newPost = document.createElement('section');
  newPost.setAttribute('class', 'post');

  const postHeader = document.createElement('header');
  postHeader.setAttribute('class', 'post-header');
  newPost.appendChild(postHeader);

  const postUsernameHeading = document.createElement('h5');
  postUsernameHeading.setAttribute('class', 'username');
  postUsernameHeading.innerText = postUserName;
  postHeader.appendChild(postUsernameHeading);

  const iconContainer = document.createElement('div');
  iconContainer.setAttribute('class', 'icon-container');
  postHeader.appendChild(iconContainer);

  const likeIcon = document.createElement('i');
  likeIcon.setAttribute('class', 'like-icon');
  iconContainer.appendChild(likeIcon);

  const commentIcon = document.createElement('i');
  commentIcon.setAttribute('class', 'comment-icon');
  iconContainer.appendChild(commentIcon);

  const shareIcon = document.createElement('i');
  commentIcon.setAttribute('class', 'share-icon');
  iconContainer.appendChild(shareIcon);

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'image-section');
  newPost.appendChild(imageSection);

  const postImage = document.createElement('img');
  postImage.setAttribute('class', 'post-image');
  postImage.setAttribute('src', postImageUrl);
  imageSection.appendChild(postImage);

  const imageCaption = document.createElement('div');
  imageCaption.setAttribute('class', 'image-caption');
  imageSection.appendChild(imageCaption);

  const caption = document.createElement('h6');
  caption.setAttribute('class', 'caption');
  caption.innerText = postImageComment;
  imageCaption.appendChild(caption);

  const commentSection = document.createElement('div');
  commentSection.setAttribute('class', 'comment-section');
  newPost.appendChild(commentSection);

  const allCommentPosts = document.createElement('ul');
  allCommentPosts.setAttribute('class', 'all-comment-posts');
  commentSection.appendChild(allCommentPosts);

  const commentPost = document.createElement('li');
  commentPost.setAttribute('class', 'comment-post');
  allCommentPosts.appendChild(commentPost);

  const userDisplayPic = document.createElement('i');
  userDisplayPic.setAttribute('class', 'user-display-pic');
  commentPost.appendChild(userDisplayPic);

  const postText = document.createElement('p');
  postText.setAttribute('class', 'post-text');
  //TODO may need to somehow add addPost functionality later
  commentPost.appendChild(postText);

  const submitComment = document.createElement('div');
  submitComment.setAttribute('class', 'submit-comment');
  newPost.appendChild(submitComment);

  const commentForm = document.createElement('form');
  commentForm.setAttribute('class', 'comment-form');
  submitComment.appendChild(commentForm);

  const postComment = document.createElement('input');
  postComment.setAttribute('class', 'post-comment');
  postComment.setAttribute('type', 'text');
  postComment.setAttribute('placeholder', 'Add a comment...');
  commentForm.appendChild(postComment);

  const commentButton = document.createElement('input');
  commentButton.setAttribute('class', 'comment-button');
  commentButton.setAttribute('type', 'submit');
  commentButton.setAttribute('value', 'Post');
  commentForm.appendChild(commentButton);

  postContainer.appendChild(newPost);

});


const commentForm = document.querySelectorAll('.comment-form');
//const submitComment = document.querySelector('.comment-form');

commentForm.forEach(comment => {

  comment.addEventListener('submit', event =>{
    event.preventDefault();
    newComment();
  });

  const newComment = () => {

    const commentText = comment.parentElement.querySelector(".post-comment").value;

    const allCommentPosts = comment.parentElement.parentElement.querySelector('.all-comment-posts');
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
    newCommentText.innerText = commentText;
    newComment.appendChild(newCommentText);
  }

});