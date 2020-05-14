
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


// Hiding the modal 
$("#success-modal").hide()
submitPersonalDetails = (e) => {
    e.preventDefault()
    $("#personal-details").addClass("hide")
    $("#main-details").removeClass("hide")
    $("#response-rate").hide()
    $("#request-img").attr("src","./img/rocket.png")

    patient_name = $("#patient_name").val()
    name = $("#your_name").val()
    phone_number = $("#phone_number").val()
    email = $("#email").val()
}
submitMainDetails = (e) => {
    e.preventDefault()
    $("#main-details").addClass("hide")
    $("#additional-details").removeClass("hide")

    date = $("#date").val()
    unit = $("#units").val()
    bg = $("#bg").val()
    hospital = $("#hospital").val()

}
submitAdditionalDetails = (e) => {
    e.preventDefault()
    $("#submit-request-button").addClass("loading-start")
    city = $("#city_region").val()
    additional = $("#details").val()
    address = $("#address").val()
    this.createHelplineRequest()
}




// Showing and hiding of div
showPersonalDiv = () => {
    console.log("showing personal details")
    $("#main-details").addClass("hide")
    $("#personal-details").removeClass("hide")
    $("#additional-details").addClass("hide")
    $("#response-rate").show()
    $("#request-img").attr("src","./img/growth1.png")
}

showMainDetailsDiv = () => {
    console.log("Showing main div")
    $("#additional-details").addClass("hide")
    $("#main-details").removeClass("hide")
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
        'Additional_Details': additional,
        'Date_When_Required': date,
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
            console.log('Shoing success modal')
            $("#success-modal").show()
            let x = setInterval( () => {
                window.location.reload()
            },2000)
            
        }
    })

}