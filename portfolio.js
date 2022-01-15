const themeBtn = document.getElementById("themebtn")
function addDarkMode(){
    document.body.classList.add("dark")
    for(let i=1;i <= 9; i++){
        document.querySelector(`#change-text${i}`).classList.add("light-text")
    }
    for(let j=1; j <= 4; j++){
        document.querySelector(`#change-gradient${j}`).classList.add("dark-gradient")
    }
    themeBtn.src = "images/moon.svg.svg"
    localStorage.setItem("theme", "dark")
}
function removeDarkMode(){
    document.body.classList.remove("dark")
    for(let i=1;i <= 9; i++){
        document.querySelector(`#change-text${i}`).classList.remove("light-text")
    }
    for(let j=1; j <= 4; j++){
        document.querySelector(`#change-gradient${j}`).classList.remove("dark-gradient")
    }
    themeBtn.src = "images/sun.svg"
    localStorage.setItem("theme", "light")
}

function changeTheme(){
    localStorage.getItem("theme")
    if(localStorage.getItem("theme") === "light"){
        console.log("dark")
        addDarkMode()
    } else {
        console.log("lightday")
        removeDarkMode()
    }
}
themeBtn.addEventListener("click", changeTheme)
if(localStorage.getItem("theme") ==="dark"){
    addDarkMode()
}

const aboutBtn = document.getElementById("about-btn")
const projectBtn = document.getElementById("project-btn")
const contactBtn = document.getElementById("contact-btn")
const homeBtn = document.getElementById("name")
const aboutSection = document.querySelector(".about")
const projectSection = document.querySelector(".project-section")
const contactSection = document.querySelector(".contact-section")
const homeSection = document.querySelector(".home-section")

aboutBtn.addEventListener("click", function(){
    homeSection.classList.remove("active")
    aboutSection.classList.add("active")
    projectSection.classList.remove("active")
    contactSection.classList.remove("active")
    aboutBtn.textContent = "About ▼"
    projectBtn.textContent = "Project"
    contactBtn.textContent = "Contact"
})

projectBtn.addEventListener("click", function(){
    homeSection.classList.remove("active")
    aboutSection.classList.remove("active")
    projectSection.classList.add("active")
    contactSection.classList.remove("active")
    aboutBtn.textContent = "About"
    projectBtn.textContent = "Project ▼"
    contactBtn.textContent = "Contact"
})
contactBtn.addEventListener("click", function(){
    homeSection.classList.remove("active")
    aboutSection.classList.remove("active")
    projectSection.classList.remove("active")
    contactSection.classList.add("active")
    aboutBtn.textContent = "About"
    projectBtn.textContent = "Project"
    contactBtn.textContent = "Contact ▼"
})
homeBtn.addEventListener("click", function(){
    homeSection.classList.add("active")
    aboutSection.classList.remove("active")
    projectSection.classList.remove("active")
    contactSection.classList.remove("active")
    aboutBtn.textContent = "About"
    projectBtn.textContent = "Project"
    contactBtn.textContent = "Contact"
})

const projectArr = [
    {
        name: "Calculator",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dignissimos tempora eos fugit earum, modi molestiae dicta, soluta deleniti vitae nostrum laborum, recusandae eveniet accusamus ea? Non sed architecto magnam.",
        skills: "HTML CSS Javascript",
        url : "images/temp.jpg"
    },
    {
        name: "Stone Paper Scissors",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dignissimos tempora eos fugit earum, modi molestiae dicta, soluta deleniti vitae nostrum laborum, recusandae eveniet accusamus ea? Non sed architecto magnam.",
        skills: "HTML CSS Javascript",
        url : "images/spsGame.jpg"
    },
    {
        name: "Retro Snake Game",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dignissimos tempora eos fugit earum, modi molestiae dicta, soluta deleniti vitae nostrum laborum, recusandae eveniet accusamus ea? Non sed architecto magnam.",
        skills: "HTML CSS Javascript",
        url : "images/snakeGame.jpg"
    },
    {
        name: "Javascriptmas",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dignissimos tempora eos fugit earum, modi molestiae dicta, soluta deleniti vitae nostrum laborum, recusandae eveniet accusamus ea? Non sed architecto magnam.",
        skills: "HTML CSS Javascript",
        url : "images/javascriptmas.jpg"
    }
]
const slideImg = document.getElementById("slide-image")
const slideName = document.getElementById("slide-name")
const slideContent = document.getElementById("slide-text")
const slideSpans = document.getElementById("spans")
let delay = 3000
let i = 0;
function startCarousel(){
    if (i === projectArr.length){
        i = 0
    } else{
        slideImg.src = `${projectArr[i].url}`
        slideName.textContent = `${projectArr[i].name}`
        slideSpans.textContent = `${projectArr[i].skills}`
        slideContent.textContent = `${projectArr[i].content}`
        console.log(i)
        i++
    }
}
startCarousel()
setInterval(function(){startCarousel()},3000);