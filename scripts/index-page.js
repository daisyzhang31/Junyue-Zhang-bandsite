

const arr = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    content:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
   name: "Emilie Beach",
    date: "01/09/2021",
    content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
  }
];



function displayComment(arr){ 
    for(let i = 0; i < arr.length; i++){
     const parent = document.querySelector(".comments");  
     const div1 = document.createElement("div");
     div1.classList.add("comments__detail");

     const div2 = document.createElement("div");
     div2.classList.add("comments__picture");

     const art = document.createElement("article");
     art.classList.add("comments__text");

     const span1 = document.createElement("span");
     span1.classList.add("comments__text--name");
     span1.innerText = arr[i].name;

     const span2 = document.createElement("span");
     span2.classList.add("comments__text--time");
     span2.innerText = arr[i].date;

     const span3 = document.createElement("span");
     span3.classList.add("comments__text--content");
     span3.innerText = arr[i].content;

     const border = document.createElement("hr");

     div1.appendChild(div2);
     div1.appendChild(art);
     art.appendChild(span1);
     art.appendChild(span2);
     art.appendChild(span3);
     parent.appendChild(div1);
     div1.appendChild(border);
    }
}

displayComment(arr);


// const parent = document.querySelector('.comments')

// const div1 = document.createElement('div'); 
//     div1.classList.add("comments__detail");

// const div2 = document.createElement('div');
//  div2.classList.add("comments__picture");

//  const art = document.createElement('article');
//     art.classList.add("comments__text");

// const span1 = document.createElement('span');
//     span1.classList.add("comments__text--name");
//     span1.innerText = "name";

// const span2 = document.createElement("span");
// span2.classList.add("comments__text--time");
// span2.innerText = "date";

// const span3 = document.createElement("span");
// span3.classList.add("comments__text--content");
// span3.innerText = "content";


// div1.appendChild(div2);
// div1.appendChild(art);
// art.appendChild(span1);
// art.appendChild(span2);
// art.appendChild(span3);
// parent.appendChild(div1);














