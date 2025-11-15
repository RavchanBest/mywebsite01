let name = "Ravshan"
let age = 10
let isHungry = false
let clicks = 0


let btn = document.querySelector(".ctabtn")
let clicksdisplay = document.querySelector(".clicks")




function checkAge() {
    if (age => 18) {
        console.log("добро пожаловать!")
    }
    else {
        console.log("вход запрещён!")
    }
}




btn.addEventListener("click", () => {
    clicksdisplay.innerHTML = clicks += 100
})



