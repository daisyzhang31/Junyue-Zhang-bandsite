
const showsparent = document.querySelector(".shows");

const heading = document.createElement("h1");
heading.classList.add("shows__header");
heading.innerText = "Shows";
showsparent.appendChild(heading);

const showsinfor = document.createElement("section");
showsinfor.classList.add("shows__inforcontainer");
showsparent.appendChild(showsinfor);

let arr = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane ",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East ",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge ",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021 ",
    venue: "Hyatt Agency ",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: " Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

arr.forEach((element) => {

  const div0 =document.createElement("div");
  div0.classList.add("shows__inforwarp")

  const div1 = document.createElement("div");
  div1.classList.add("shows__infor");

  const span1 = document.createElement("span");
  span1.classList.add("shows__infor--date-name");
  span1.innerText = "DATE";

  const span2 = document.createElement("span");
  span2.classList.add("shows__infor--content");
  span2.classList.add("one");
  span2.innerText = element.date;

  const div2 = document.createElement("div");
  div2.classList.add("shows__infor");

  const span3 = document.createElement("span");
  span3.classList.add("shows__infor--venue-name");
  span3.innerText = "VENUE";

  const span4 = document.createElement("span");
  span4.classList.add("shows__infor--content");
  span4.innerText = element.venue;

  const div3 = document.createElement("div");
  div3.classList.add("shows__infor");

  const span5 = document.createElement("span");
  span5.classList.add("shows__infor--locataio-name");
  span5.innerText = "LOCATION";

  const span6 = document.createElement("span");
  span6.classList.add("shows__infor--content");
  span6.innerText = element.location;

  const button1 = document.createElement("button");
  button1.classList.add("shows__button");
  button1.innerText = "Buy Tickets";

  // const divider = document.createElement("hr");
  // divider.classList.add("shows__divider");

  div1.appendChild(span1);
  div1.appendChild(span2);
  div2.appendChild(span3);
  div2.appendChild(span4);
  div3.appendChild(span5);
  div3.appendChild(span6);
div0.appendChild(div1);
div0.appendChild(div2);
div0.appendChild(div3);
div0.appendChild(button1);
// div0.appendChild(divider);
showsinfor.appendChild(div0);
});

const visible1 = document
  .querySelector(".shows__infor--date-name")
  .classList.add("shows__infor--name-visible1");

 const visible2 = document
   .querySelector(".shows__infor--venue-name")
   .classList.add("shows__infor--name-visible2"); 

 const visible3 = document
   .querySelector(".shows__infor--locataio-name")
   .classList.add("shows__infor--name-visible3"); 



