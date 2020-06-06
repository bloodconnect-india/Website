let faqs = [
    {
       question:"What do you mean by faq ?",
       answer :"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch ",
       tags :["faq","heya","awareness","all"]
    },
    {
        question:"What do you mean by Blood Donation ?",
        answer :"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch ",
        tags :["blood donation","first","second","all"]
    },
    {
        question:"What do you mean by anything?",
        answer :"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch ",
        tags :["faq","anish","second","all"]
    }
]


let faqID = 1

const generateOutput = (tag) => {
    let output = ''
    for (i =0 ; i< faqs.length ; i++){
        console.log(faqs[i].tags.includes(tag),tag)
        if(tag != null && faqs[i].tags.includes(tag.toLowerCase()) ){
            output += `<div class="faq shadow-light py-2 px-3">
            <p class="color-dark f-18  bg-none text-left  pl-2 mb-0 collapsed"  data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
            ${faqs[i].question}
            </p>          
            <div id="collapse${i}" class="collapse faq-collapse" aria-labelledby="headingOne" data-parent="#faqAccordian">
            <div class="card-body color-dark text-left">
                    ${faqs[i].answer}       
            </div>
            <p class="color-grey text-left mb-0 fw-6 pl-2">Tags : </p>
            <div class="d-flex flex-row">`
            for (j in faqs[i].tags) {
                output += `<button class="tag">${faqs[i].tags[j]}</button>`
            }
            output += `</div></div></div>`
        }
    }
    return output
}


let output = generateOutput("All")
$("#faqAccordian").html(output)

const searchFor = (e) => {
    let searchText = ''
    if(e.target)
        searchText = e.target.value
    else 
        searchText = e
    let searchOutput = `<h4 class="f-30 text-center color-dark">Search Result for ${searchText}</h4>`
    let output = generateOutput(searchText)
    if(output.length == 0)  
        output= `<h4 class="f-40 color-grey text-center"> Sorry no result found</h4>`
    $("#faqAccordian").html(searchOutput+output)
}

// var availableTags = [
//     "faq",
//     "Heya",
//     "Second",
//     "Blood Donation",
//     "Awareness"    
// ];
// $("#selector").autocomplete({
//     source: availableTags
// });


