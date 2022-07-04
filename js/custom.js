//preloader 
var preload = document.getElementById("preloader");
window.addEventListener("load", function(){
    preload.style.display = "none";
});
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
