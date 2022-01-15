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
