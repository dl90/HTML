/**
 * @author Don (dl90)
 */

const url = 'https://instasam-one.herokuapp.com/api/insta_posts';

main();

function main () {
  document.addEventListener('DOMContentLoaded', fetchFromDb());
}

function fetchFromDb() {
  try {
    fetch(url , { method: 'GET' })
      .then(data => data.json()
        .then(arr => call(arr)))
  } catch(error) {
    console.log("Loading Error!!!", error.message)
  }
}


/**
 * Call function for calling createPost/Comment.
 * @param {Array} post An array of objects containg info for creating posts.
 */
function call (post) {
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


/**
 * Creates a post from an objects value and add it to the DOM
 * @param {Object} post Object to be passed.
 */
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
  postComment.setAttribute('minlength', '3');
  postComment.setAttribute('maxlength', '45');
  commentForm.appendChild(postComment);

  const commentButton = document.createElement('input');
  commentButton.setAttribute('class', 'comment-button');
  commentButton.setAttribute('type', 'submit');
  commentButton.setAttribute('value', 'Post');
  commentForm.appendChild(commentButton);

  //appends to before first child
  postContainer.prepend(newPost);

  //comment eventListener
  const commentFormSelector = document.getElementById(`${postId}`).querySelector('.comment-form');
  commentFormSelector.addEventListener('submit', event => {
    event.preventDefault();

    const commentObj = {};
    const commentURL = `https://instasam-one.herokuapp.com/api/insta_posts/${postId}/comments`;

    const newCommentText = commentFormSelector.querySelector('.post-comment').value;
    const verify = (newCommentText.length);

    if(verify >= 5) {
      commentObj.message = newCommentText;

      //push the comment object into the post object.comments array
      post.comments.push(commentObj);

      //sends comment to Database.
      try {
        fetch(commentURL, {
          method: 'POST',
          headers: {
            "accept": "application/json",
            "Content-Type": "application/json" },
          body: JSON.stringify(commentObj)
        })
        .then(res => {
          if(res.ok) {
            fetchFromDb();
          } else {
            throw new Error("Request Failed")
          }
        })
        .catch(err => console.log(`Failed to post comment: ${err}`))
      } catch(error) {
        console.log("Comment Error!!!", error.message);
      }

      const postPoster = commentFormSelector.parentElement.parentElement.querySelector('.all-comment-posts');
      postPoster.innerHTML = "";

      alert("New comment posted");

    } else {
      alert('\nPlease enter the correct information for a new comment!')
    }
    
  });

  let counter = 0;
  const likeEvent = document.getElementById(`${postId}`).querySelector('.like-icon');
  likeEvent.addEventListener('click', () => {

    try {
      const likeObj = {};
      const likePostURL = `https://instasam-one.herokuapp.com/api/insta_posts/${postId}/likes`

      likeObj.like_count = parseInt( post.like_count )+ 1
      counter = counter + 1;

      console.log('Like post: ' + `${postId}` + `  [ server side: ${post.like_count} / DOM side: ${counter} ]`);

      fetch(likePostURL, {
        method: `POST`,
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json"},
        body: JSON.stringify(likeObj)
      })
      .then(res => {
        if(res.ok) {
          // fetchFromDb();
        } else {
          throw new Error("Fetch Failed")
        }
      })
    } catch(error) {
      console.log("Like click event POST error " + error.message)
    }
  })

  const commentEvent = document.getElementById(`${postId}`).querySelector('.comment-icon');
  commentEvent.addEventListener('click', () => {
    console.log('Comment post: ' + `${postId}`);
  })

  const shareEvent = document.getElementById(`${postId}`).querySelector('.share-icon');
  shareEvent.addEventListener('click', () => {
    console.log('Share post: ' + `${postId}`);
  })
}


/**
 * Creates the comments from object values and add it to the DOM
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

    const userIcon = document.createElement('i');
    userIcon.setAttribute('class', "user-display-pic");
    newComment.appendChild(userIcon);

    const newCommentText = document.createElement('p');
    newCommentText.setAttribute('class', 'post-text');
    newCommentText.innerText = commentText;
    newComment.appendChild(newCommentText);

    // newComment.scrollIntoView({ behavior: "smooth", block: "center" });
    postSelector.querySelector('.comment-form').reset();
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

    // idArr was used previously to assign an unique id
    // const newId = (idArr.length + 1);

    const verifyArr = [];
    if (postUserName.length <= 5) {
      verifyArr.push(1);
    }
    if (postImageUrl.length <= 5) {
      verifyArr.push(1);
    }
    if (postImageComment.length <= 5) {
      verifyArr.push(1);
    }

    if (verifyArr.includes(1)) {
      alert('\nPlease enter the correct information for a new post!');
    } else {

      let obj = {};
      //obj.id = newId;
      obj.username = postUserName;
      obj.image_url = postImageUrl;
      obj.message = postImageComment;
      obj.comments = [];
  

      //sends post to Database.
      try {
        fetch(url, {
          method: 'POST',
          body: JSON.stringify({ post: obj }),
          headers: { "Content-Type": "application/json" }
        })
        .then(res => {
          if (res.ok) {
            const postContainer = document.querySelector('.post-container');
            postContainer.innerHTML = "";
            fetchFromDb();
          } else {
            throw new Error("Post Request Failed!")
          }
        })
        .catch(err => console.log(`Failed to post: ${err}`))
      } catch(error) {
        console.log("Posting Error!!!", error.message)
      }
  
      const scroll = document.querySelector(".page-header");
      scroll.scrollIntoView({ behavior: "smooth"});
      document.querySelector('#post-form').reset();

      alert("New post added");
    }
  });
  return idArr;
}
