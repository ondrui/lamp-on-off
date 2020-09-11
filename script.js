"use strict"
// let lamp = document.querySelector(".lampBody");
// console.log(lamp);
// let lampSrc = lamp.querySelector("img");
// console.log(lampSrc);
// lampSrc.setAttribute("src", "img/lampOn.jpg");
document.querySelector(".on").onclick = function() {
  document.querySelector(".lampBody").querySelector("img").setAttribute("src", "img/lampOn.jpg");
}

document.querySelector(".off").onclick = function() {
  document.querySelector(".lampBody").querySelector("img").setAttribute("src", "img/lampOff.jpg");
}


