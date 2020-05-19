$('.carousel').carousel()

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var navbarSm = document.getElementById("navbar-sm")
var navbarToggler = document.getElementById("mobile-nav-toggler")
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var stickySm = navbarSm.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.pageYOffset >= stickySm) {
    navbarSm.classList.add("sticky-sm")
  } else {
    navbarSm.classList.remove("sticky-sm");
  }
} 


toggleMobileNav = () => {
  var mobileNav = document.getElementById("mobile-nav-list")
  if(mobileNav.classList.contains("hide")){
    mobileNav.classList.remove("hide")
    mobileNav.classList.add("show")
    navbarToggler.classList.add("mr-0")
    navbarToggler.innerHTML = "<i class='fa fa-times color-main f-24' ></i>"
  }else{
    mobileNav.classList.remove("show")
    mobileNav.classList.add("hide")
    navbarToggler.classList.remove("mr-0")
    navbarToggler.innerHTML = "<i class='fa fa-bars f-24' ></i>"
  }
     
}


var hashParams = window.location.hash.substr(1).split('&');
for(var i = 0; i < hashParams.length; i++){
    var p = hashParams[i].split('=');
    document.getElementById(p[0].toLowerCase()).value = decodeURIComponent(p[1]);;
}