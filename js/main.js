$('.carousel').carousel()
$('.collapse').collapse()





var hashParams = window.location.hash.substr(1).split('&');
for(var i = 0; i < hashParams.length; i++){
    var p = hashParams[i].split('=');
    document.getElementById(p[0].toLowerCase()).value = decodeURIComponent(p[1]);;
}