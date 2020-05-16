
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
$("#success-modal").hide()
submitRequest = (e) => {
    e.preventDefault()
    $("#submit-request-button").addClass("loading-start")
    patient_name = $("#patient_name").val()
    name = $("#your_name").val()
    phone_number = $("#phone_number").val()
    email = $("#email").val()
    unit = $("#units").val()
    bg = $("#bg").val()
    hospital = $("#hospital").val()
    requirement = $("#requirement").val()
    city = $("#city_region").val()
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
            console.log('Shoing success modal')
            $("#success-modal").show()
            let x = setInterval( () => {
                window.location.reload()
            },2000)
            
        }
    })

}