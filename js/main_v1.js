$('.carousel').carousel()

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() , {passive: true }};

// Get the navbar
var navbarSticky = document.getElementById("navbar-sticky");
var navbar = document.getElementById("navbar")
var navbarToggler = document.getElementById("mobile-nav-toggler")
var navbarSm = document.getElementById("navbar-sm")
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
if (window.pageYOffset < 50 && (window.location.href.includes("index") || window.location.href.includes("donor"))) {
  }
  else if (window.pageYOffset >= window.innerHeight - 100) {
    navbarSticky.classList.remove('hide')
    navbarSticky.classList.add('show-flex')
    navbar.classList.add('hide')
    navbarToggler.classList.remove('color-white')
    navbarToggler.classList.add('color-dark')
  } else {
    navbarSticky.classList.add('hide')
    navbarSticky.classList.remove('show-flex')
    navbar.classList.remove('hide')
    if (!navbarToggler.classList.contains('color-dark-fixed')) {
      navbarToggler.classList.add('color-white')
      navbarToggler.classList.remove('color-dark')
    }
  }
}



toggleMobileNav = () => {
  var mobileNav = document.getElementById("mobile-nav")
  var mobileNavList = document.getElementById("mobile-nav-list")
  if (mobileNavList.classList.contains("hide")) {
    mobileNavList.classList.remove("hide")
    mobileNavList.classList.add("show")
    navbarToggler.classList.add("mr-0")
    mobileNav.classList.add("w-100")
    navbarToggler.innerHTML = "<i class='fa fa-times color-main f-20' ></i>"
  } else {
    mobileNavList.classList.remove("show")
    mobileNavList.classList.add("hide")
    navbarToggler.classList.remove("mr-0")
    mobileNav.classList.remove("w-100")
    navbarToggler.innerHTML = "<i class='fa fa-bars f-20' ></i>"
  }

}


var hashParams = window.location.hash.substr(1).split('&');
for (var i = 0; i < hashParams.length; i++) {
  var p = hashParams[i].split('=');
  if (document.getElementById(p[0].toLowerCase()))
    document.getElementById(p[0].toLowerCase()).value = decodeURIComponent(p[1]) === "Delhi" ? "Delhi NCR":decodeURIComponent(p[1]);
}


// All the main scroll funtions

goToTeam = () => {
  window.scrollTo({
    top: $("#boardMembers").offset().top - window.innerHeight / 2,
    behavior: 'smooth'
  })
}

