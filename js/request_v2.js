
function goToForm(city) {
    window.scrollTo({
        top: $("#request-form").offset().top-200,
        left: $("#request-form").offset().left,
        behavior: 'smooth'
      });
    $("#city_region").val(city)
}


selectingCity = (e) => {
    if(e.target.value == "Other")
        $("#otherCity").removeClass('hide')
    else
        $("#otherCity").addClass('hide')
}

// For the request form
var patient_name = ""
var name = ""
var phone_number = ""
var email = ""
var date = ""
var units = ""
var hospital = ""
var bg = ""
var city = ""
var additional = ""
var address = ""
var requirement = " "
var disease = ""
var covid = ""



// Hiding the modal 

submitRequest = (e) => {
    e.preventDefault()
    $("#submit-request-button").addClass("loading-start")
    patient_name = $("#patient_name").val()
    name = $("#your_name").val()
    phone_number = "+91"+$("#phone_number").val()
    email = $("#email").val()
    unit = $("#units").val()
    bg = $("#bg").val()
    hospital = ""
    requirement = $("#requirement").val()
    city = $("#city_region").val()
    disease = ""
    if(city == 'Other')
        city = $("#other_city").val()
    this.createHelplineRequest()
}



createHelplineRequest = () => {
    let url = "https://bc-api-2.onrender.com/helpline"
    var requestData = {
        'patient_name':patient_name,
        'name':name,
        'city':city,
        'email':email,
        'units' : parseInt(unit),
        'contact': phone_number,
        'bg': bg,
        'requirement':requirement,
        'hospital': hospital,
        'disease':disease,
        'status': "Open"
    }

    
    fetch(url,{
        method: 'POST',
        body:JSON.stringify(requestData),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(response => response.json()).then(data => {
        
        if(data.msg === "success"){
            $("#success-modal").removeClass('hide')
            $("#success-modal").addClass('show')
            let secondsLeft = 3;
            setInterval( () => {
                if(secondsLeft <= 0)
                    window.location.href = "./sponsor.html"
                $("#seconds").html(`${secondsLeft}s`)
                secondsLeft -=1;
            },1000)
            
        }
    })

}
