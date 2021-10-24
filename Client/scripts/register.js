/*
register.js
xavier zhang
300944977
Oct 19 2021
*/
"use-strict";

// const formPage = document.getElementById('formPage');

async function registerUser(event) {
  const username = document.getElementById("userName-input").value;
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;

  const result = await fetch("/register", {
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
    // everythign went fine
    alert("Success");
  } else {
    alert(result.error);
  }
}
