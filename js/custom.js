
//sticky nav  
window.addEventListener("scroll" , function(){
  var navslide = document.getElementById("header");
  navslide.classList.toggle("sticky" , window.scrollY >300 );
});

//nav toggle
var navToggler = document.getElementById("nav-toggle");
var menu = document.querySelector(".menu");

navToggler.onclick = function () {
  navToggler.classList.toggle("active");
  menu.classList.toggle("active");
};
document.onclick = function (e) {
  if (e.target.id !== "nav-toggle" && e.target.classList !== "menu") {
    navToggler.classList.remove("active");
    menu.classList.remove("active");
  }
};
// Proposal
var Yes = document.getElementById('yes');
var No = document.getElementById('no');

var ResultYes = document.getElementById('result-yes');
var ResultNo = document.getElementById('result-no');


Yes.onclick = function(){
  ResultYes.classList.toggle("active");
  ResultNo.classList.remove("active");
};
No.onclick = function(){
  ResultYes.classList.remove("active");
  ResultNo.classList.toggle("active");
};