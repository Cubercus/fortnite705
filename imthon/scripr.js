let box = ["ball", "laptop", "home"]
box.unshift("bomb remote control")
box.push("bomb")
console.log(box);

function five() {
    let question = prompt("What is your name?")
    let firstname = document.querySelector(".firstname")
    firstname.innerHTML = ("Ism : "+question)
    if (question.length > 10) {
        alert(question + " ismi uzun")
    } else {
        alert(question + " ismi uzunligi uzun emas")
    }
}
five()






