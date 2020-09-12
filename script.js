"use strict"
document.querySelector(".on").onclick = function() {
  document.querySelector("img").setAttribute("src", "img/lamp-on.png");
};

document.querySelector(".off").onclick = function() {
  document.querySelector("img").setAttribute("src", "img/lamp-off.png");
};


