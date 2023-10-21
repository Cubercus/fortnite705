
let box = document.querySelector('.box')
let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')

box.style.height = "450px"
box.style.width = "200px"
box.style.gap = "50px"
box.style.backgroundColor = "gray"
box.style.display = "flex"
box.style.gap = "50px"

yellow.style.width = "100px"
yellow.style.height = "100px"
yellow.style.backgroundColor = "yellow"


green.style.width = "100px"
green.style.height = "100px"
green.style.backgroundColor = "green"

red.style.width = "100px"
red.style.height = "100px"
red.style.backgroundColor = "red"




let lang = prompt("Tilni tanlang 1-Eng, 2-Uzb, 3-Rus.")

if (lang === "2") {
    let svetoforuzb = prompt("Yashil Yurish, Qizil To'xtash, Sariq Kutish")
    if (svetoforuzb.toLowerCase() === "yashil") {
        green.style.backgroundColor = "green"
        red.style.backgroundColor = "102, 0, 0"
        yellow.style.backgroundColor = "102, 102, 0"
        alert("Yuring")
    } else if (svetoforuzb.toLowerCase() === "sariq") {
        green.style.backgroundColor = "0, 102, 0"
        red.style.backgroundColor = "102, 0, 0"
        yellow.style.backgroundColor = "yellow"
        alert("Kuting")
    } else if (svetoforuzb.toLowerCase() === "qizil") {
        green.style.backgroundColor = "0, 102, 0"
        yellow.style.backgroundColor = "102, 102, 0"
        red.style.backgroundColor = "red"
        alert("to'xtang")
    } else {
        alert("Unday rang yo'q")
    }
} else if (lang === "3") {
    let svetoforrus =  prompt("зеленЫй ехать, красный остановиться, желтЫй ждать")
    if (svetoforrus.toLowerCase() === "зеленЫй") {
        green.style.backgroundColor = "green"
        red.style.backgroundColor = "102, 0, 0"
        yellow.style.backgroundColor = "102, 102, 0"
        alert("Вперед")
    } else if (svetoforrus.toLowerCase() === "желтЫй") {
        green.style.backgroundColor = "0, 102, 0"
        red.style.backgroundColor = "102, 0, 0"
        yellow.style.backgroundColor = "yellow"
        alert("ждите")
    } else if (svetoforrus.toLowerCase() === "красный") {
        green.style.backgroundColor = "0, 102, 0"
        yellow.style.backgroundColor = "102, 102, 0"
        red.style.backgroundColor = "red"
        alert("останавитесъ")
    } else {
        alert("Такого цвета нет")
    }
} else if (lang === "1") {
    let svetoforeng = prompt("Green walking, Yellow stand by, Red stoping ")
    if (svetoforeng.toLowerCase() === "green") {
        green.style.backgroundColor = "green"
        red.style.backgroundColor = "102, 0, 0"
        yellow.style.backgroundColor = "102, 102, 0"
        alert("Go")
    } else if (svetoforeng.toLowerCase() === "yellow") {
        green.style.backgroundColor = "0, 102, 0"
        red.style.backgroundColor = "#102, 0, 0"
        yellow.style.backgroundColor = "yellow"
        alert("Wait")
    } else if (svetoforeng.toLowerCase() === "red") {
        green.style.backgroundColor = "#0, 102, 0"
        yellow.style.backgroundColor = "#102, 102, 0"
        red.style.backgroundColor = "red"
        alert("Stop")
    } else {
        alert("There is no such color")
    }
}









