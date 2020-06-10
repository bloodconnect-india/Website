let faqs = [
    {
       question:"What is blood? What is it composed of ?",
       answer :"Blood is the red coloured fluid flowing continuously in our body’s circulatory system. It contains mainly a fluid called plasma in which are suspended cellular elements. Three types of cells: Red Blood Cells or RBC’s, White Blood Cells or WBC’s and tiny platelets form the cellular element. ",
       tags :["about blood","blood","blood composition","all"]
    },
    {
        question:"How much blood does a person have ?",
        answer :"The total amount of blood in the human body can vary with several factors, like age, sex, health condition, body type, etc. However, for an average adult, the volume of blood in his/her body is 7-8% of the body weight (The amount of blood would vary between 5 to 6 litres for an average adult).",
        tags :["about blood","blood","blood composition","all"]
    },
    {
        question:"How is blood formed ?",
        answer :"Blood consists of RBCs, WBCs, platelets suspended in plasma. In early embryonic life blood cells are formed in liver and spleen. But by the fifth month the Haemopoisis (i.e., formation of blood) occurs in bone marrow and lymphatic tissues. At birth the entire bone marrow is red and active. Gradually as the child grows, the marrow remains red only in the flat bones and vertebrae. The RBC, grannulocytes of WBC and platelets are produced mainly by bone marrow. The lymphocytes, monocytes, plasma cells are formed in the lymphoid and Reticulo Endothelial tissues. The orderly proliferation of the cells in the bone marrow and their release into circulation is carefully regulated according to the needs of body. Every day, new blood cells are being produced in the bone marrow and every day old cells are dying and being removed from the body. Red blood cells have a life of 120 days and when it becomes old and senile it is thrown out. White cells live for a few days and platelets for a few hours. Thus, daily new cells are added to the circulation and old are removed from it. ",
        tags :["about blood","blood","blood formation","all"]
    },{
        question:"What is haemoglobin ?",
        answer:"Haemoglobin is a substance present in the red cells. It is helpful in carrying oxygen and carbon dioxide. On an average, in a healthy male it should be between 14-16 gm % and in a female it should be about 12-14 gm %. This is also being daily synthesized and the new is replacing the old stock. ",
        tags :["about blood","blood","haemoglobin","all"]
    },{
        question:"What are blood groups? What is Rh factor ?",
        answer:"Every individual has two types of blood groups. The first is called the ABO grouping and the second type is called Rh grouping. In the ABO group there are four categories namely A Group, B Group, O Group and AB Group. In the Rh Group either the individual is Rh-positive, or Rh-negative. Rh is a factor called as Rhesus factor that has come to us from Rhesus monkeys. It refers to a protein on the red blood cells (Protein present: Rh-positive; Protein absent: Rh-negative). Thus, each and every human being will fall in one of the following groups. A positive or A negative B positive or B negative O positive or O negative AB positive or AB negative There are also some sub groups and other classifications which have not been discussed here. ",
        tags :["about blood","blood","rh-factor","rh factor","rh","all"]
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
            <div class="d-flex flex-row flex-column-sm">`
            for (j in faqs[i].tags) {
                output += `<button class="tag mb-2">${faqs[i].tags[j]}</button>`
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


