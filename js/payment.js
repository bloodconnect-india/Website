

let order_id = ""
let name = ""
let email = ""
let amt = 0
let contact = ""
let siganture = ""

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
    alert("payment success")
    hidePayment()
}

amtSelected = (e) => {
    $("button.amt").removeClass('selected')
    e.target.classList.add('selected')
    amt = e.target.textContent
    $("#amtInput").val(amt)

    $("#amtImpact").html(`You are helping us save ${amt/10} lives <i class="color-main fa fa-heart"></i>`)
}