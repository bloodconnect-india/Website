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
  var mobileNav = document.getElementById("mobile-nav")
  var mobileNavList = document.getElementById("mobile-nav-list")
  if(mobileNavList.classList.contains("hide")){
    mobileNavList.classList.remove("hide")
    mobileNavList.classList.add("show")
    navbarToggler.classList.add("mr-0")
    mobileNav.classList.add("w-100")
    navbarToggler.innerHTML = "<i class='fa fa-times color-main f-24' ></i>"
  }else{
    mobileNavList.classList.remove("show")
    mobileNavList.classList.add("hide")
    navbarToggler.classList.remove("mr-0")
    mobileNav.classList.remove("w-100")
    navbarToggler.innerHTML = "<i class='fa fa-bars f-24' ></i>"
  }
     
}


var hashParams = window.location.hash.substr(1).split('&');
for(var i = 0; i < hashParams.length; i++){
    var p = hashParams[i].split('=');
    if(document.getElementById(p[0].toLowerCase()))
      document.getElementById(p[0].toLowerCase()).value = decodeURIComponent(p[1]);;
}


// All the main scroll funtions

goToTeam = () => {
  window.scrollTo({
    top:$("#boardMembers").offset().top-window.innerHeight/2,
    behavior: 'smooth'
  })
}

// Camp request workflow
showPersonaldetailsInput = () => {
  $("#personalDetails").show()
  $("#campDetails").hide()
}
showCampDetailsInput = () => {
  $("#personalDetails").hide()
  $("#campDetails").show()
}