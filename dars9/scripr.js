let num1 = +prompt("Number 1")
let num2 = +prompt("Number 2")
function ko() {
    switch (num1, num2) {
        case num1 > num2:
            console.log(num1 + " Kattaroq " + num2);
            break;
        case num2 > num1:
            console.log(num2 + " Kattaroq " + num1);
            break
        case num1 === num2:
            console.log(num1 + " Teng " + num2);
            break;
        default:console.log("eror");
            break;
    }
}

true()
