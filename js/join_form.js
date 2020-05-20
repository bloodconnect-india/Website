//jQuery time
 var current_fs, next_fs, previous_fs;
    var left, opacity, scale;
    var animating;
    $(".join-form").validate({
        errorClass: 'invalid',
        errorElement: 'span',
        errorPlacement: function(error, element) {
            error.insertAfter(element.next('span').children());
        },
        highlight: function(element) {
            $(element).next('span').show();
        },
        unhighlight: function(element) {
            $(element).next('span').hide();
        }
    });
    $(".next").click(function() {
        $(".join-form").validate({
            errorClass: 'invalid',
            errorElement: 'span',
            errorPlacement: function(error, element) {
                error.insertAfter(element.next('span').children());
            },
            highlight: function(element) {
                $(element).next('span').show();
            },
            unhighlight: function(element) {
                $(element).next('span').hide();
            }
        });
        if ((!$('.join-form').valid())) {
            return true;
        }
        if (animating) return false;
        animating = true;
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        //$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        next_fs.show();
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //scale = 1 - (1 - now) * 0.2;
                //left = (now * 50) + "%";
                opacity = 1 - now;
                current_fs.css({'opacity': opacity});
                next_fs.css({'opacity': opacity});
            },
            duration: 000,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            //easing: 'easeInOutExpo'
        });
    });
   $(".previous").click(function(){
    if(animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    //$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            //scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            //left = ((1-now) * 50)+"%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            //current_fs.css({'left': left});
            current_fs.css({'opacity': opacity});
            //previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
            previous_fs.css({'opacity': opacity});
        }, 
        duration: 000, 
        complete: function(){
            current_fs.hide();
            animating = false;
        }, 
        //this comes from the custom easing plugin
        //easing: 'easeInOutBack'
    });
});
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
  