
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
showPayment = () => {
    $("#payment-details").show()
    $("#payment-details").removeClass('hide')
}
hidePayment = () => {
    $("#payment-details").hide()
}
hidePayment()
initiatePayment = (e) => {
    e.preventDefault()
    name = $("#nameInput").val()
    email = $("#emailInput").val()
    amt = $("#amtInput").val()
    contact = $("#contactInput").val()
    
    var options = {
        "key": "rzp_test_k2prQpLyyBZBZc", // Enter the Key ID generated from the Dashboard
        "amount": amt*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "BloodConnect Foundation",
        "description": "Test Transaction",
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
            "color": "#EB2441"
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
            window.location.reload()
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
    $("#amtImpact").html(`You are helping us save ${Math.round(amt/10)} lives ${beatingHeart}`)
    requirePanCard(e)
}

requirePanCard = (e) => {
    let amt
    if(e.target.textContent){
        amt = e.target.textContent
    }else {
        amt = e.target.value
    }
    if(amt < 2000){
        document.getElementById("panCardInput").removeAttribute('required')
        $("label[for='panCardInput']").html('Pan Card Number')
        $("label[for='panCardInput']").addClass("not-required")
    }
    else {
        document.getElementById("panCardInput").setAttribute('required',true)
        $("label[for='panCardInput']").html('Pan Card Number (required for donation above 2000)')
        $("label[for='panCardInput']").removeClass("not-required")
    }
}