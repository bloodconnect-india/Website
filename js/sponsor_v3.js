
const cp = window.location.search.split("&")[0].substring(1).split("=")[1];
let order_id = ""
let name = ""
let email = ""
let amt = 0
let contact = ""
let panCard = ""
let dob = ""
let siganture = ""
let beatingHeart = '<i class="fa fa-heart color-main"></i>'
let BASE_URL  = "https://bc-api2.herokuapp.com"
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

verifyPayment = (order_id,payment_id,signature) => {

    let data = {
        "razorpay_order_id":order_id,
        "razorpay_payment_id":payment_id,
        "razorpay_signature":signature,
        "name":name,
        "email":email,
        "contact":"+91"+contact,
        "amount":amt,
        "panCard":panCard,
        "dob":dob,
        "source":cp
    }

    let url = BASE_URL+"/payment/verify"
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           let res = JSON.parse(xhttp.responseText)
           if(res.msg === "success")
            paymentSuccess()
        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json")
  
    xhttp.send(JSON.stringify(data));
}

setOption = (order_id) => {
    var options = {
        "key": "rzp_live_wwzcBBhKfyo9Dx", // Enter the Key ID generated from the Dashboard
        "amount": amt*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "BloodConnect Foundation",
        "description": "Donation",
        "order_id":order_id,
        "image": "./img/logo.png", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            let payment_id = response.razorpay_payment_id
            let siganture = response.razorpay_signature
            let o_id = response.razorpay_order_id
            verifyPayment(o_id,payment_id,siganture)
        },
        "prefill":{
            "name":name,
            "email":email,
            "contact":"+91"+contact
        },
        "notes": {
            "address": "BloodConnect Foundation"
        },
        "theme": {
            "color": "#980000"
        }
    };
    var rzp1 = new Razorpay(options);
    startPayment(rzp1)
}

initiatePayment = (e) => {
    e.preventDefault()
    $("#sponsorButtton").html("Processing..")
    name = $("#nameInput").val()
    email = $("#emailInput").val()
    amt = $("#amtInput").val()
    contact = $("#contactInput").val()
    panCard = $("#panCardInput").val()
    dob = $("#dateOfBirth").val()
    
    let body = {
        "amount": amt*100,
        "currency": "INR",
        "receipt": "rcptid_11",
        "payment_capture": 1,
        'name': name,
        "email":email,
        "contact":"+91"+contact,
        
    }
    
    let url = BASE_URL+"/payment/create"
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           let res = JSON.parse(xhttp.responseText)
           setOption(res.data.id)
        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json")
    xhttp.send(JSON.stringify(body));
    
    
}

startPayment = (rzp1) => {
    rzp1.open();
}

paymentSuccess = () => {
    window.location.href= "./thank-you.html"
}

amtSelected = (e) => {
    //$("#amtImpact").addClass('w-0')
    $("button.amt").removeClass('selected')
    e.target.classList.add('selected')
    amt = e.target.textContent.replace(/\n/g, '').trim();
    $("#amtInput").val(amt)
    $("#amtImpact").html(`You are helping us save ${amt/50} lives ${beatingHeart}`)
    //$("#amtImpact").removeClass('w-0')
    $("#amtImpact").addClass('w-100')
    requirePanCard(e)
}

amtChanged = (e) =>{
    let amt = e.target.value
    if(amt < 50)
    $("#amtImpact").html(`You are helping us save 1 live ${beatingHeart}`)
    else
    $("#amtImpact").html(`You are helping us save ${Math.round(amt/50)} lives ${beatingHeart}`)
    requirePanCard(e)
}

requirePanCard = (e) => {
    e.preventDefault()
}