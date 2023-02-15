let myLead = []

const inputEl = document.getElementById("input_el")
const savebtn = document.getElementById("save_btn")
const tabbtn = document.getElementById("tab_btn")
const deletebtn = document.getElementById("delete_btn")
const ulEl = document.getElementById("ul_El")

let leadfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadfromlocalstorage) {
    myLead = leadfromlocalstorage
    render(myLead)
}

function render(leads) {
    let mylist = ""
    
    for (let i = 0; i < leads.length; i++) {
       // mylist += /*"<li>" + myLead[i] + "</li>"*/

        mylist += `<li> 
                    <a target="_blank" href="${leads[i]}" > ${leads[i]} </a> 
                   </li>`
     
        /*const li = document.createElement("li")
        li.textContent = myLead[i]
        ulEl.append(li)**/
         
    }

    ulEl.innerHTML = mylist
}

tabbtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentwindow: true}, function (tabs) {
        myLead.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLead))
        render(myLead)
    })

})

deletebtn.addEventListener("dblclick", function () {
    myLead = []
    localStorage.clear()
    render(myLead)
})

savebtn.addEventListener("click", function () {
    myLead.push(inputEl.value)

    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLead))
    console.log(localStorage.getItem("myLeads"))

    render(myLead)

    
})



