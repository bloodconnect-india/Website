
// Binding exc key
$('body').keydown(function(e) {
    if (e.keyCode == 27) {
        // put your code here if any (that will run after Esc pressed).
        hidePayment()
    }    
});
let order_id = ""
let name = ""
let email = ""
let amt = 0
let contact = ""
let siganture = ""
let beatingHeart = '<i class="fa fa-heart color-main"></i>'

let speed = 10
startSlide = () => {
    $('#fade-slide').slick({
        dots: false,
        autoplay: true,
        infinite: true,
        speed: speed,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false
      });
} 

startSlide()
showPayment = () => {
    $("#payment-details").show()
    $("#payment-details").removeClass('hide')
    $("#fade-slide").slick('unslick')
    speed = 500
    startSlide()
}
hidePayment = () => {
    $("#payment-details").hide()
    $("#fade-slide").slick('unslick')
    speed = 10
    startSlide()
}
hidePayment()


initiatePayment = (e) => {
    e.preventDefault()
    name = $("#nameInput").val()
    email = $("#emailInput").val()
    amt = $("#amtInput").val()
    contact = $("#contactInput").val()
    
    
    var options = {
        "key": "rzp_live_wwzcBBhKfyo9Dx", // Enter the Key ID generated from the Dashboard
        "amount": amt*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "BloodConnect Foundation",
        "description": "Website Transaction",
        "image": "./img/logo.png", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            console.log(response)
            if(response.razorpay_payment_id != null){
                paymentSuccess()
            }
            order_id = response.razorpay_payment_id
            siganture = response.razorpay_signature
        },
        "prefill":{
            "name":name,
            "email":email,
            "contact":contact
        },
        "notes": {
            "address": "BloodConnect Foundation"
        },
        "theme": {
            "color": "#D20003"
        }
    };
    var rzp1 = new Razorpay(options);
    startPayment(rzp1)
}

startPayment = (rzp1) => {
    rzp1.open();
}

paymentSuccess = () => {
    $("#success-modal").removeClass('hide')
    $("#success-modal").addClass('show')
    let secondsLeft = 3;
    let x = setInterval( () => {
        if(secondsLeft <= 0)
            window.location.href = "./organize-a-camp.html"
        $("#seconds").html(`${secondsLeft}s`)
        secondsLeft -=1;
    },1000)
    hidePayment()
}

amtSelected = (e) => {
    //$("#amtImpact").addClass('w-0')
    $("button.amt").removeClass('selected')
    e.target.classList.add('selected')
    amt = e.target.textContent
    $("#amtInput").val(amt)
    $("#amtImpact").html(`You are helping us save ${amt/50} lives ${beatingHeart}`)
    //$("#amtImpact").removeClass('w-0')
    $("#amtImpact").addClass('w-100')
    requirePanCard(e)
}

amtChanged = (e) =>{
    let amt = e.target.value
    if(amt < 1)
    $("#amtImpact").html(`You are helping us save 1 live ${beatingHeart}`)
    else
    $("#amtImpact").html(`You are helping us save ${Math.round(amt/50)} lives ${beatingHeart}`)
    requirePanCard(e)
}

requirePanCard = (e) => {
    e.preventDefault()
}