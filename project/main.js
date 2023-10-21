let atfirst = document.querySelector(".atfirst")
let randomnumber = document.querySelector(".randomnumber")
let number = document.querySelector(".number")
let bestresult = document.querySelector(".bestresult")
let balls = document.querySelector(".balls")
let check = document.querySelector(".check")
let txt4 = document.querySelector(".txt4")
let body = document.querySelector("body")
let continued = document.querySelector(".continue")
let txt1 = document.querySelector(".txt1")
let ball2 = 5
let bestresult2 = 0


let random = Math.floor(Math.random() * 20)
console.log(random);

check.addEventListener("click", function checkrandom() {
    balls.innerHTML = ball2 - 1
    if (+number.value === random) {
        body.style.backgroundColor = "green"

        randomnumber.innerHTML = random
        bestresult.innerHTML = bestresult2 + 1
        txt4.innerHTML = "Угадал"
        continued.style.display= "block";

    } else if (+number.value < random) {
        txt4.innerHTML = "Побольше"
    } else if (+number.value > random) {
        txt4.innerHTML = "Поменьше"
    }
}
)

atfirst.addEventListener('click', () => {
    location.reload()
})


continued.addEventListener('click', () => {
    nextlavel()
})
function nextlavel() {
    for (let i = 1; i < 3; i++) {
        let randomnextllevel = Math.floor(Math.random() * (i * 10))
    }

}


