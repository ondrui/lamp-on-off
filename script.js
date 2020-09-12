"use strict"
document.querySelector(".on").onclick = function() {
  document.querySelector("img").setAttribute("src", "img/lampOn.jpg");
};

document.querySelector(".off").onclick = function() {
  document.querySelector("img").setAttribute("src", "img/lampOff.jpg");
};


