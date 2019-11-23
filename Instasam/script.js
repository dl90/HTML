main(posts);

function main (post) {
  const postContainer = document.querySelector('.post-container');
  postContainer.innerHTML = "";

  post.forEach(element => {
    createPostElement(element);
  });
}


function createPostElement(post) {

  const postContainer = document.querySelector('.post-container');
  //const postId = post.id;
  const postUserName = post.username;
  const postImageUrl = post.image_url;
  const postImageComment = post.message;
  const postComments = post.comments;

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

   //comment loop
   postComments.forEach(comment => {

    const commentText = comment.message;

    const post1 = document.querySelector('.all-comment-posts');
    const newComment = document.createElement('li');
    newComment.setAttribute('class', 'comment-post');
    
    post1.appendChild(newComment);
    
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
