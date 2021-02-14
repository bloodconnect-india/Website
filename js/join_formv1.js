$("#go-to-form").click(function () {
    $('html, body').animate({
        scrollTop: $("#form").offset().top - 250
    }, 1000);
});

const gotoformtop = () => {
    $('html, body').animate({
        scrollTop: $("#form").offset().top - 250
    }, 200);
}

const showalert = (msg) => {
    alert(msg)
}

const selectingCity = (e) => {
    if (e.target.value === "Other") {
        $("#otherCity").removeClass('hide')
        $("#other_city").prop('required', true)
        console.log("Required")

    }
    else {
        $("#otherCity").addClass('hide')
        $("#other_city").prop('required', false)
        console.log("Not required")
    }
}

let section1 = $("#section1")
let section2 = $("#section2")
let section3 = $("#section3")
let page1 = $("#page1")
let page2 = $("#page2")
let page3 = $("#page3")

const changingEducation = (e) => {
    e.preventDefault()
    if (e.target.value == 'Student')
        $("#graduationYearInput").show()
    else
        $("#graduationYearInput").hide()

}

const showSection1 = () => {
    section2.hide()
    section3.hide()
    section1.show()
    page1.addClass('active')
    page2.removeClass('active')
    page3.removeClass('active')
}
const showSection2 = () => {
    section1.hide()
    section3.hide()
    section2.show()
    page2.addClass('active')
    page1.removeClass('active')
    page3.removeClass('active')
    document.getElementById("city").focus()
}
const showSection3 = () => {
    section1.hide()
    section2.hide()
    section3.show()
    page3.addClass('active')
    page2.removeClass('active')
    page1.removeClass('active')
    document.getElementById("why_BC1").focus()
}

showSection1()
var Name = "";
var Phone_Number = "";
var Email = "";
var City = "";
var Education_Details = "";
var Degree_Profession_pursuing = "";
var Organization = "";
var Year_of_graduation = "";
var Prior_Experience_Volunteering = "";
var Why_BC = new Array();
var Interested_In = new Array();
var additional = "";
var How_BC = "";
var Personal_Contact = "";
var requestData = {}

$("#success-modal").hide()


const selectInterest = (e) => {
    let interest = e.target.value
    if (e.target.checked && Interested_In.indexOf(interest) == -1) {
        Interested_In.push(interest)
    } else {
        let index = Interested_In.indexOf(interest)
        Interested_In.splice(index, 1)
    }
    console.log(Interested_In)
}

const selectWhyBC = (e) => {
    let reason = e.target.value
    if (e.target.checked && Why_BC.indexOf(reason) == -1) {
        Why_BC.push(reason)
    } else {
        let index = Why_BC.indexOf(reason)
        Why_BC.splice(index, 1)
    }
    console.log(Why_BC)
}


const validateInptut = () => {
    const requiredInputId = {"your_name":1, "email":1, "phone_number":1, "organization":1,"city":2,"interest":2,"prior_exp":2,"Why_BC":3,"how_BC":3};
}

const sendRequest = () => {

    console.log("sending request")
    $("#submit-request-button").addClass("loading-start");
    $("#submit-request-button").attr("disabled","disabled");
    

    let url = 'https://bc-api2.herokuapp.com/recruitment'
   /*
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json()).then(data => {

        if (data.msg === "success") {
            $("#success-modal").removeClass('hide')
            $("#success-modal").addClass('show')
            let secondsLeft = 3;
            let x = setInterval(() => {
                if (secondsLeft <= 0)
                    window.location.href = "./our-team.html"
                $("#seconds").html(`${secondsLeft}s`)
                secondsLeft -= 1;
            }, 1000)

        }
    })*/

}
const submitRequest = () => {

    let city = $("#city").val()
    if (city == 'Other')
        city = $("#other_city").val()
    Name = $('#your_name').val();
    Phone_Number = "+91" + $("#phone_number").val();
    Email = $("#email").val();
    Organization = $("#organization").val();
    City = city;
    Education_Details = $("#education_details").val();
    Year_of_graduation = $("#graduation_year").val();
    Prior_Experience_Volunteering = $("#prior_exp").val();
    How_BC = $("#how_BC").val();
    Why_BC = Why_BC;
    Interested_In = Interested_In;
    Personal_Contact = $("#personal_contact").val();

    if(!Name || !Phone_Number || !Email || !Organization) {
        showSection1();
        gotoformtop();
        showalert("Please fill all the required fields");
        goto
        return;
    } else if(!City || !Prior_Experience_Volunteering || !Interested_In) {
        showSection2();
        gotoformtop();
        showalert("Please fill all the required fields");
        return;
    }else if(!How_BC || !Why_BC) {
        showSection3();
        gotoformtop();
        showalert("Please fill all the required fields");
        return;
    }
    requestData = {
        Name,
        Phone_Number,
        Email,
        Organization,
        City,
        Education_Details,
        Year_of_graduation,
        Prior_Experience_Volunteering,
        How_BC,
        Why_BC,
        Interested_In,
        Personal_Contact,
        additional
    }
    sendRequest()
}

