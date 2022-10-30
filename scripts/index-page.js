// create the DOM

function displayComment(comment) {
  const parent = document.querySelector(".comments");
  const div1 = document.createElement("div");
  div1.classList.add("comments__detail");

  const div2 = document.createElement("div");
  div2.classList.add("comments__picture");

  const art = document.createElement("article");
  art.classList.add("comments__text");

  const div3 = document.createElement("div");
  div3.classList.add("comments__text--container");

  const span1 = document.createElement("span");
  span1.classList.add("comments__text--name");
  span1.innerText = comment.name;

  const span2 = document.createElement("span");
  span2.classList.add("comments__text--time");
  timeString = new Date(comment.timestamp).toLocaleDateString("en-US");
  span2.innerText = timeString;

  const span3 = document.createElement("span");
  span3.classList.add("comments__text--content");
  span3.innerText = comment.comment;

  const div4 = document.createElement("div");
  div4.classList.add("comments__like-container");

  const span4 = document.createElement("span");
  span4.classList.add("comments__like");

  const span5 = document.createElement("span");
  span5.classList.add("comments__like-number");
  span5.innerText = comment.likes;

  span4.addEventListener("click", () => {
    const putUrl =`https://project-1-api.herokuapp.com/comments/${comment.id}/like?api_key=08831e75-1640-469e-9269-f4d00eb4136b`
    axios.put(putUrl).then(res => {
    span5.innerText = res.data.likes
    });
    }
  )

  div1.appendChild(div2);
  div1.appendChild(art);
  art.appendChild(div3);
  div3.appendChild(span1);
  div3.appendChild(span2);
  art.appendChild(span3);
  art.appendChild(div4);
  div4.appendChild(span4);
  div4.appendChild(span5);
  parent.prepend(div1);
}

// get default comments from AXIOS and display them

function getAndDisplayComments() {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments/?api_key=08831e75-1640-469e-9269-f4d00eb4136b"
    )
    .then((result) => {
      comments = result.data;
      newComments = comments.sort((a, b) => a.timestamp - b.timestamp);
      console.log(newComments);
      newComments.forEach((comment) => {
        displayComment(comment);
      });
    })
    .catch((error) => console.log(error));
}

getAndDisplayComments();



/* add event to form */

const commentForm = document.getElementById("commentform");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // border color change based on status

  isValid = isInputValid(event);

  if (isValid === false) {
    return;
  }

  // create new comment and post new comments to API

  const newComment = createComment(event);

  addNewComment(newComment);

  // clear the text remain in the form

  event.target.reset();
});



/* function definations */

// border color change based on status

const isInputValid = (event) => {
  const inputName = event.target.formname.value;
  const inputText = event.target.comment.value;
  const isInputNameEmpty = inputName === "";
  const isInputCommentEmpty = inputText === "";
  if (isInputNameEmpty) {
    event.target.formname.style.border = "1px solid #D22D2D";
  } else {
    event.target.formname.style.border = "1px solid #E1E1E1";
  }
  if (isInputCommentEmpty) {
    event.target.comment.style.border = "1px solid #D22D2D";
  } else {
    event.target.comment.style.border = "1px solid #E1E1E1";
  }
  if (isInputCommentEmpty || isInputNameEmpty) {
    return false;
  }
  return true;
};

// create new comment and post new comments to API

const createComment = (event) => {
  const inputName = event.target.formname.value;
  const inputText = event.target.comment.value;
  const Comment = {
    name: inputName,
    comment: inputText,
  };
  return Comment;
};

const addNewComment = (newComment) => {
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=08831e75-1640-469e-9269-f4d00eb4136b",
      newComment
    )
    .then((response) => {
      addedComment = response.data;
      displayComment(addedComment);
    })
    .catch(function (error) {
      console.log(error);
    });
};
