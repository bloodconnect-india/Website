
// For the request form
var your_name = ""
var phone_number = ""
var email = ""
var city = ""
var additional = ""
var organization_name  = ""
var date = ""
var expAttendants = 0
var mode = ""


// Hiding the modal 

submitAwarenessRequest = (e) => {
    e.preventDefault()
    $("#submit-request-button").addClass("loading-start")
    your_name = $("#your_name").val()
    phone_number = $("#phone_number").val()
    email = $("#email").val()
    organization_name = $("#organization_name").val()
    expAttendants = $("#expected_attendants").val()
    mode = $("#mode").val()
    additional = $("#additional").val()
    date = $("#date_field").val()
    city = $("#city").val()
    this.createAwarenessRequest()
}



createAwarenessRequest = () => {

    let url = "https://bc-api2.herokuapp.com/awareness-request"
    var requestData = {
        'Your_Name':your_name,
        'City_Name':city,
        'Email':email,
        'Phone_Number': "+91"+phone_number,
        'Organization_Name' : organization_name,
        'Mode':mode,
        'Expected_Attendants':expAttendants
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

function changeDateToDDMMYY(date) {
    let newDate = "";
    const dateAr = date.split("-");
    newDate = dateAr[2] + "-" + dateAr[1] + "-" + dateAr[0];
    return newDate;
}