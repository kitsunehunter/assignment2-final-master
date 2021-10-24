"use-strict";
/*
projectpage.js
xavier zhang
300944977
Oct 19 2021
*/

//getting the element ids of the values for the popUp to open and close
const modal = document.getElementById("myModal");

let btn = document.getElementById("project-1");

const span = document.getElementsByClassName("close")[0];

//functions for opening and closing the popUp menu
function OpenPopUp(id) {
  console.log("IM HERE");
  document.getElementById(id).style.display = "block";
}

function closePopUp(id) {
  document.getElementById(id).style.display = "none";
}
//span click to hide the text value.
span.onclick = function () {
  modal.style.display = "none";
};
