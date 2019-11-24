main(posts);

function main (post) {
  const postContainer = document.querySelector('.post-container');
  postContainer.innerHTML = "";
  let id = [];

  post.forEach(element => {
    createPostElement(element);
    id.push(element.id);
  });

  post.forEach(element => {
    renderComments(element);
  });

  postFunctionality(id);
}


function createPostElement(post) {

  const postContainer = document.querySelector('.post-container');
  const postId = post.id;
  const postUserName = post.username;
  const postImageUrl = post.image_url;
  const postImageComment = post.message;

  //creating new post
  const newPost = document.createElement('section');
  newPost.setAttribute('class', 'post');
  newPost.setAttribute('id', postId);

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
  shareIcon.setAttribute('class', 'share-icon');
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
  newPost.scrollIntoView({ behavior: "smooth" });
}

/**
 * 
 * @param {Object} post individual post from posts.js
 */
function renderComments(post) {

  const postId = post.id;
  const postComments = post.comments;

  postComments.forEach(comment => {

    const commentText = comment.message;

    const postSelector = document.getElementById(`${postId}`);
    const postPoster = postSelector.querySelector('.all-comment-posts');
    const newComment = document.createElement('li');
    newComment.setAttribute('class', 'comment-post');

    postPoster.appendChild(newComment);

    //user icon
    const userIcon = document.createElement('i');
    userIcon.setAttribute('class', "user-display-pic");
    newComment.appendChild(userIcon);

    //comment section
    const newCommentText = document.createElement('p');
    newCommentText.setAttribute('class', 'post-text');
    newCommentText.innerText = commentText;
    newComment.appendChild(newCommentText);
  });
}

/**
 * New post listener for creating new post
 * @param {Array} idArr id array to reassign new id
 */
function postFunctionality(idArr) {

  const Post = document.querySelector('#post-form');

  Post.addEventListener('submit', event => {

    event.preventDefault();
    const postUserName = Post.querySelector('[name=user-name]').value;
    const postImageUrl = Post.querySelector('[name=image-url]').value;
    const postImageComment = Post.querySelector('[name=image-comment]').value;

    const newId = (idArr.length + 1);

    let obj = {};
    obj.id = newId;
    obj.username = postUserName;
    obj.image_url = postImageUrl;
    obj.message = postImageComment;

    createPostElement(obj);
    idArr.push(newId);
  });
  return idArr;
}



/**
 * Comment event listener
 */
const commentFunc = () => {

  const commentForm = document.querySelectorAll('.comment-form');

  // commentForm.addEventListener('submit', event => {
  //   event.preventDefault();
  //   newComment(commentForm);
  // })

  commentForm.forEach(comment => {

    comment.addEventListener('submit', event => {
      event.preventDefault();
      newComment(comment);
    });
  });
}