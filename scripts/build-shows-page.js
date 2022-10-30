// create DOM tree

const showsparent = document.querySelector(".shows");

const showsinfor = document.querySelector(".shows__inforcontainer");

function dispalyShows(showsDetail) {
  const div0 = document.createElement("div");
  div0.classList.add("shows__inforwarp");

  const div1 = document.createElement("div");
  div1.classList.add("shows__infor");

  const span1 = document.createElement("span");
  span1.classList.add("shows__infor--date-name");
  span1.innerText = "DATE";

  const span2 = document.createElement("span");
  span2.classList.add("shows__infor--content");
  span2.classList.add("one");
  span2.innerText = new Date(showsDetail.date).toDateString("en-US");

  const div2 = document.createElement("div");
  div2.classList.add("shows__infor");

  const span3 = document.createElement("span");
  span3.classList.add("shows__infor--venue-name");
  span3.innerText = "VENUE";

  const span4 = document.createElement("span");
  span4.classList.add("shows__infor--content");
  span4.innerText = showsDetail.place;

  const div3 = document.createElement("div");
  div3.classList.add("shows__infor");

  const span5 = document.createElement("span");
  span5.classList.add("shows__infor--locataio-name");
  span5.innerText = "LOCATION";

  const span6 = document.createElement("span");
  span6.classList.add("shows__infor--content");
  span6.innerText = showsDetail.location;

  const link = document.createElement("a");
  link.classList.add("shows__buttonlink");

  const button1 = document.createElement("button");
  button1.classList.add("shows__button");
  button1.innerText = "Buy Tickets";

  div1.appendChild(span1);
  div1.appendChild(span2);
  div2.appendChild(span3);
  div2.appendChild(span4);
  div3.appendChild(span5);
  div3.appendChild(span6);
  div0.appendChild(div1);
  div0.appendChild(div2);
  div0.appendChild(div3);
  div0.appendChild(link);
  link.appendChild(button1);
  showsinfor.appendChild(div0);
}

// get show information from API

const getShowDate = () => {
  axios.get(
    "https://project-1-api.herokuapp.com/showdates?api_key=996ddd18-2180-45a8-96fd-4bb39d607563"
  )
    .then((result) => {
      showsInfo = result.data;
      showsInfo.forEach((showsDetail) => {
        dispalyShows(showsDetail);
      });
      
      // change the row backgroud color when selected

      const showsRows = document.querySelectorAll(".shows__inforwarp");

      showsRows.forEach((element) => {
        element.addEventListener("click", (event) => {
          event.preventDefault();
          event.currentTarget.classList.toggle("shows__wrapactive");
          showsRows.forEach((row) => {
            if (row !== event.currentTarget) {
              row.classList.remove("shows__wrapactive");
            }
          });
        });
      });
    })
    .catch((error) => console.log(error));
}

getShowDate();




