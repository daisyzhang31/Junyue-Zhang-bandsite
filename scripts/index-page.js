

const arr = [
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    content:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    content:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Connor Walton",
    date: "02/17/2021",
    content:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  }
];


function displayComment(comment){ 
    // for(let i = 0; i < arr.length; i++){
     const parent = document.querySelector(".comments");  
     const div1 = document.createElement("div");
     div1.classList.add("comments__detail");

     const div2 = document.createElement("div");
     div2.classList.add("comments__picture");

     const art = document.createElement("article");
     art.classList.add("comments__text");

     const div3 =document.createElement('div');
     div3.classList.add("comments__text--container");

     const span1 = document.createElement("span");
     span1.classList.add("comments__text--name");
     span1.innerText = comment.name;

     const span2 = document.createElement("span");
     span2.classList.add("comments__text--time");
     span2.innerText = comment.date;

     const span3 = document.createElement("span");
     span3.classList.add("comments__text--content");
     span3.innerText = comment.content;

     div1.appendChild(div2);
     div1.appendChild(art);
     art.appendChild(div3)
     div3.appendChild(span1);
     div3.appendChild(span2);
     art.appendChild(span3);
     parent.prepend(div1);
}


for (let i = 0; i < arr.length; i++) {
  displayComment(arr[i]);
}


const commentform = document.getElementById("commentform");

commentform.addEventListener('submit',(event) => {
  event.preventDefault();
  console.log(event.target)
  console.log(event);
  const inputname = event.target.formname.value;
  const inputtext = event.target.comment.value;
const newcomment = {
  name : inputname,
  date : Date.now(),
  content : inputtext,
}
console.log(newcomment)

// const commentarr = [newcomment,...arr];
displayComment(newcomment);
});



















