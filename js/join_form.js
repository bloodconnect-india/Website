$("#go-to-form").click(function() {
    $('html, body').animate({
        scrollTop: $("#form").offset().top
    }, 1000);
});

let section1 = $("#section1")
let section2 = $("#section2")
let section3 = $("#section3")
let page1 = $("#page1")
let page2 = $("#page2")
let page3 = $("#page3")

changingEducation = (e) => {
    e.preventDefault()
    if(e.target.value == 'Student')
        $("#graduationYearInput").show()
    else 
        $("#graduationYearInput").hide()

}
showSection1 = () => {
    section2.hide()
    section3.hide()
    section1.show()
    page1.addClass('active')
    page2.removeClass('active')
    page3.removeClass('active')
}
showSection2 = () => {
    section1.hide()
    section3.hide()
    section2.show()
    page2.addClass('active')
    page1.removeClass('active')
    page3.removeClass('active')
}
showSection3 = () => {
    section1.hide()
    section2.hide()
    section3.show()
    page3.addClass('active')
    page2.removeClass('active')
    page1.removeClass('active')
}

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
submitRequest = (e) => {
    e.preventDefault()
    $("#submit-request-button").addClass("loading-start")
    requestData = {
    Name : $('#your_name').val(),
    Phone_Number : "+91"+$("#phone_number").val(),
    Email: $("#email").val(),
    Organization : $("#organization").val(),
    City : $("#city").val(),
    Education_Details : $("#education_details").val(),
    Year_of_graduation : $("#graduation_year").val(),
    Prior_Experience_Volunteering : $("#prior_exp").val(),
    How_BC : $("#how_BC").val(),
    Why_BC: Why_BC,
    Interested_In: Interested_In,
    Personal_Contact :$("#personal_contact").val(),
    additional : $("#additional_comment").val()
    }
    console.log(requestData)
    this.sendRequest()
} 
sendRequest = () => {

  console.log("sending request")

  let url= 'http://localhost:3000/recruitment'
  fetch(url,{
    method: 'POST',
    body:JSON.stringify(requestData),
    headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json()).then(data => {
    
    console.log(data)
})

  console.log(requestData)
 }
  

 selectInterest = (e) => {
    let interest = e.target.value
    if(e.target.checked && Interested_In.indexOf(interest) == -1){
        Interested_In.push(interest)
    }else{
        let index = Interested_In.indexOf(interest)
        Interested_In.splice(index,1)
    }
    console.log(Interested_In)
 }

 selectWhyBC = (e) => {
    let reason = e.target.value
    if(e.target.checked && Why_BC.indexOf(reason) == -1){
        Why_BC.push(reason)
    }else{
        let index = Why_BC.indexOf(reason)
        Why_BC.splice(index,1)
    }
    console.log(Why_BC)
 }