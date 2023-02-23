"use strict";

console.log("ready");

window.addEventListener("load", catogeri)

let age = 72;
let message = "";


function catogeri(){
    let age = 0;
    displayAge();
}




function displayAge() {
  document.querySelector("#age").textContent = age;


  if (age < 18) {
    message = "it's a child";
  } else if (age > 18 && age < 72) {
    message = "it's a adult";
  } else {
    message = "it's a sinor";
  }
  document.querySelector("#message").textContent = message;
}

