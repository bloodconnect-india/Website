

var name
var enail
var phone
var dor
var firstCall
var rate
var like
var differently
var willDonateBlood
var willOrganizeCamp
var willSponsor
var additional

const rateBC = (i) => {
    rate = i
}

const setFirstCall = (v) => {
    firstCall = v
}

const setDonateBlood = (v) => {
    willDonateBlood = v
    //console.log(donateBlood)
}
const setOrganizeCamp = (v) => {
    willOrganizeCamp = v
}

const setSponsor = (v) => {
    willSponsor = v
}

const submitHFeedback = (e) => {
    e.preventDefault()
    $("#submit-request-button").addClass("loading-start")
    const data = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        dor: $("#dor").val(),
        city: $("#city").val(),
        ID: $("#id").val(),
        firstCall,
        rate,
        like: $("#like").val(),
        differently: $("#differently").val(),
        willDonateBlood,
        willOrganizeCamp,
        willSponsor,
        additional: $("#additional").val(),
    }


    sendRequest('https://blood-request-api.herokuapp.com/v2/helpline-feedback', data)
}

// Camp Feedback
var collabAgain
var campRate
const willCollab = (v) => {
    collabAgain = v
}
const rateCamp = (i) => {
    campRate = i
}

const submitCFeedback = (e) => {
    e.preventDefault()
    $("#submit-request-button").addClass("loading-start")
    const data = {
        name: $("#name").val(),
        email: $("#email").val(),
        organization: $("#camp").val(),
        ID: $("#id").val(),
        campRate,
        rate,
        whenAgain: $("#when-again").val(),
        differently: $("#differently").val(),
        willCollab: collabAgain,
        additional: $("#additional").val(),
    }


    sendRequest('https://blood-request-api.herokuapp.com/v2/camp-feedback', data)

}

// Donor feedback
var helpDonate
var bbRate
var refreshment
var checkups = []
var briefed
const setHelpDonate = (v) => {
    helpDonate = v
}

const rateBB = (i) => {
    bbRate = i
}
const serveRefreshment = (v) => {
    refreshment = v
}

const setBriefed = (v) => {
    briefed = v
}
const setCheckUp = (v, e) => {
    if (v === 'Other') {
        if(e.target.checked)
            $("#other").addClass('show').removeClass('hide')
        else 
        $("#other").addClass('hide').removeClass('show')
    }
    if(e.target.checked) {
        checkups.push(v.trim())
    } else {
       checkups =  checkups.filter(ck => ck !== v)
    }
    
}

const submitDFeedback = (e) => {
    e.preventDefault()
    
    $("#submit-request-button").addClass("loading-start")
    const data = {
        name: $("#name").val(),
        recommendDonation: $("#recommendDonation").val(),
        helpDonate,
        differently: $("#differently").val(),
        like: $("#like").val(),
        bbRate,
        refreshment,
        checkups,
        briefed,
        rate,
        location: $("#location").val(),
        feedback:$("#feedback").val(),
        other: $("#otherCheckUp").val()
    }

    console.log(data)
    sendRequest('https://blood-request-api.herokuapp.com/v2/donor-feedback', data)

}






const sendRequest = (url, data) => {

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json()).then((data) => {

        if (!data.error) {
            $("#success-modal").removeClass('hide')
            $("#success-modal").addClass('show')
            let secondsLeft = 3;
            let x = setInterval(() => {
                if (secondsLeft <= 0)
                    window.location.href = "/sponsor.html"
                $("#seconds").html(`${secondsLeft}s`)
                secondsLeft -= 1;
            }, 1000)

        }
    })
}