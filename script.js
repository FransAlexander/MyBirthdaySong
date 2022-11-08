
// constant elements
const mainContainer = document.querySelector(".main_container")

// LANDING PAGE
const headerText = document.createElement("h1")
headerText.classList.add("header_text")
headerText.textContent = "What's my birthdaysong"
mainContainer.appendChild(headerText)

const formContainer = document.createElement("form")
formContainer.classList.add("form")

const dobInput = document.createElement("input")
dobInput.classList.add("dob_input")
dobInput.setAttribute("type","date")

const subBtn = document.createElement("input")
subBtn.classList.add("sub_btn")
subBtn.setAttribute("type","button")
subBtn.setAttribute("value","find out")

//Appending childs Landing Page
formContainer.appendChild(dobInput)
formContainer.appendChild(subBtn)
mainContainer.appendChild(formContainer)

//SONG PAGE

//song Page wrapping container
const songPageWrapper = document.createElement("div")
//header
const headerContainer = document.createElement("div")
const headerSong = document.createElement("h1")
const subheaderSong = document.createElement("h2")

//song iframe
const songLink = document.createElement("iframe")

// return button
const returnBtn = document.createElement("button")


let dob = 0

subBtn.addEventListener("click", function(){
    getDoB()
    getSongPage()
})

function getDoB(){
    dob = parseInt(dobInput.value.replace(/-/g,""))
    mainContainer.removeChild(headerText)
    mainContainer.removeChild(formContainer)
}
function getSongPage(){
    //header
    headerSong.textContent = "The #1 song"
    subheaderSong.textContent = `yy/mm/dd`  //insert inputed date
    headerContainer.classList.add("header_container_song")
    headerContainer.appendChild(headerSong)
    headerContainer.appendChild(subheaderSong)
    mainContainer.appendChild(headerContainer)

    //Song link
    songLink.setAttribute("src","https://open.spotify.com/embed/track/603N4XGJUTbK760GLCvIIs?utm_source=generator")
    mainContainer.appendChild(songLink)

    // Back to landing page
    returnBtn.classList.add("return_btn")
    returnBtn.textContent = "try again"
    mainContainer.appendChild(returnBtn)
}

function backToMain(){
    mainContainer.removeChild(headerContainer)
    mainContainer.removeChild(songLink)
    mainContainer.removeChild(returnBtn)

    dob = 0
    dobInput.value = 0

    mainContainer.appendChild(headerText)
    formContainer.appendChild(dobInput)
    formContainer.appendChild(subBtn)
    mainContainer.appendChild(formContainer)
}
returnBtn.addEventListener("click", backToMain)




