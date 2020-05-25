$("#go-to-form").click(function() {
    $('html, body').animate({
        scrollTop: $("#form").offset().top
    }, 1000);
});

let section1 = $("#section1")
let section2 = $("#section2")
let section3 = $("#section3")
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
}
showSection2 = () => {
    section1.hide()
    section3.hide()
    section2.show()
}
showSection3 = () => {
    section1.hide()
    section2.hide()
    section3.show()
}
/*
  var Name = "";
  var Phone_Number = "";
  var Email = "";
  var City = "";
  var Education_Details = "";
  var Degree_Profession_pursuing = "";
  var Organization = "";
  var Year_of_graduation = "";
  var Prior_Experience_Volunteering = "";
  var Prior_Experience_Team = "";
  var ExtraCurricular_Activities = "";
  var Why_BC = "";  
  var Interested_In = "";
  var Why_Interested_In = "";
  var How_BC = "";
  var Personal_Contact = "";
  $("#success-modal").hide()
	submitRequest = (e) => {
    e.preventDefault()
    $("#submit-request-button").addClass("loading-start")
    Name = $(#name).val()
    Phone_Number = "+91"+$("#phonenumber").val()
    Email= $("#email").val()
    Organization = $("#organization").val()
    City = $("#city_region").val()
    Education_Details = $("#education_details").val()
    Degree_Profession_pursuing = $("#degree_profession").val()
    Year_of_graduation = $("#year_of_graduation").val()
    Prior_Experience_Team = $("#team_experience").val()
    ExtraCurricular_Activities = $("#eca_experience").val()
    Prior_Experience_Volunteering = $("#volu_experience").val()
    Why_BC = $("#y_bloodconnect").val()
    Interested_In = $("#profile").val()
    Why_Interested_In=$("#y_profile").val()
    How_BC = $("#source_info").val()
    Personal_Contact =$("#contact_name").val()
    this.sendRequest()
} 
sendRequest =() =>
{
	console.log("send request")

  var requestData = {
    "authtoken":"7aa52537be09730b877d79f6292e0999",
    "scope":"creatroapi",
    "Name":Name,
    "Phone_Number":Phone_Number,
    "Email":Email,
    "City":City,
    "Delhi_NCR":Delhi_NCR,
    "Education_Details":Education_Details,
    "Degree_Profession_pursuing":Degree_Profession_pursuing,
    "Organization":Organization,
    "Year_of_graduation":Year_of_graduation,
    "Prior_Experience_Volunteering":Prior_Experience_Volunteering,
    "ExtraCurricular_Activities":ExtraCurricular_Activities,
    "Why_BC":Why_BC,
    "Interested_In":Interested_In,
    "Why_Interested_In":Why_Interested_In,
    "How_BC":How_BC,
    "Personal_Contact":Personal_Contact,
    "Status":"On Going"   
	}
	 console.log(requestData)
 }*/
  