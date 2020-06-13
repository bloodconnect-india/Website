
console.log( $("#request-form").offset().top)
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
    hospital = $("#hospital").val()
    requirement = $("#requirement").val()
    city = $("#city_region").val()
    if(city == 'Other')
        city = $("#other_city").val()
    this.createHelplineRequest()
}



createHelplineRequest = () => {

    console.log("sending request")
    let url = "https://blood-request-api.herokuapp.com/request"
    var requestData = {
        'Patient_Name':patient_name,
        'Your_Name':name,
        'City_Region':city,
        'Your_Email':email,
        'Units_Required' : parseInt(unit),
        'Contact_Number': phone_number,
        'Blood_Group_Required': bg,
        'Hospital': hospital,
        'Status': "Open"
    }

    console.log(requestData)
    fetch(url,{
        method: 'POST',
        body:JSON.stringify(requestData),
        headers: {
            "Content-Type": "application/json"
          }
    }).then(response => response.json()).then(data => {
        
        if(!data.msg){
            console.log('Showing success modal')
            $("#success-modal").removeClass('hide')
            $("#success-modal").addClass('show')
            let secondsLeft = 3;
            let x = setInterval( () => {
                if(secondsLeft <= 0)
                    window.location.href = "./sponsor-us.html"
                $("#seconds").html(`${secondsLeft}s`)
                secondsLeft -=1;
            },1000)
            
        }
    })

}