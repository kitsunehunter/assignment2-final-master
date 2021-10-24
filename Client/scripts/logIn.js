/*
login.js
xavier zhang
300944977
Oct 19 2021
*/
"use-strict";

// const formPage = document.getElementById('formPage');
const formPage = document.getElementById("login-formPage");
formPage.addEventListener("submit", logInUser);
console.log("in login.js");
async function logInUser(event) {
  const username = document.getElementById("userName-input").value;
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;

  const result = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  }).then((res) => console.log(res));

  console.log("RESULT", result);

  if (result.status === "ok") {
    console.log("Got token", result.data);
    // everythign went fine
    alert("Success");
  } else {
    alert(result.error);
  }
}
