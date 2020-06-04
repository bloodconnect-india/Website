
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
let beatingHeart = '<svg width="50" height="50" viewBox="0 0 200 200"><g transform="translate(100 100)"><path transform="translate(-50 -50)" fill="#EB2441" d="M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52C32.75-2.42,17-2.42,7.29,7.27v0 c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z"></path><animateTransform attributeName="transform" type="scale" values="1; 1.5; 1.25; 1.5; 1.5; 1;" dur="1s" repeatCount="2" additive="sum"></animateTransform></g></svg>'
showPayment = () => {
    $("#payment-details").show()
}
hidePayment = () => {
    $("#payment-details").hide()
}
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
    $("#amtImpact").html(`You are helping us save ${amt/10} lives ${beatingHeart}`)
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