
// For the request form
var your_name = ""
var phone_number = ""
var email = ""
var city = ""
var additional = ""
var organization_name  = ""
var noOfEmp = ""



// Hiding the modal 

submitRequest = (e) => {
    e.preventDefault()
    $("#submit-request-button").addClass("loading-start")
    your_name = $("#your_name").val()
    phone_number = $("#phone_number").val()
    email = $("#email").val()
    organization_name = $("#organization_name").val()
    noOfEmp = $("#est_emp").val()
    additional = $("#additional").val()
    city = $("#city_region").val()
    if(city == 'Other')
        city = $("#other_city").val()
    this.createCampRequest()
}



createCampRequest = () => {

    let url = "https://bc-api-2.onrender.com/camp-request"
    var requestData = {
        'Your_Name':your_name,
        'City_Region':city,
        'Email':email,
        'Phone_Number': "+91"+phone_number,
        'Additional_Message' : additional,
        'Number_of_Employee': noOfEmp,
        'Organization_Name' : organization_name
    }

    fetch(url,{
        method: 'POST',
        body:JSON.stringify(requestData),
        headers: {
            "Content-Type": "application/json"
          }
    }).then(response => response.json()).then(data => {
        
        if(data.msg === "success"){
            $("#success-modal").removeClass('hide')
            $("#success-modal").addClass('show')
            let secondsLeft = 3;
            let x = setInterval( () => {
                if(secondsLeft <= 0)
                    window.location.href = "./sponsor.html"
                $("#seconds").html(`${secondsLeft}s`)
                secondsLeft -=1;
            },1000)
            
        }
    })

}