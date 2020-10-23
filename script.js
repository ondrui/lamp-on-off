"use strict"
document.querySelector(".on").onclick = function() {
  document.querySelector("img").setAttribute("src", "img/lamp-on.png");
};
// setInterval(function() {
//   let lampToggle = document.querySelector("img");
//   lampToggle.classList.toggle("lamp");
//   console.log(lampToggle);
//   //document.querySelector("img").setAttribute("src", "img/lamp-off.png");
// }, 1000);

document.querySelector(".off").onclick = function() {
  document.querySelector("img").setAttribute("src", "img/lamp-off.png");
};


