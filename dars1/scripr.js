// a<b
// a<c
// b<c
// b<a
// c<b
// c<a
// a>b
// a>c
// b>c
// b>a
// c>b
// c>a
// a=b
// a=c
// b=c
// b=a
// c=b
// c=a 

let a = +prompt("1 sonni kiriting")
let b = +prompt("2 sonni kiriitng")
let c = +prompt("3 sonni kiriitng")

if (a > b && a > c) {
    console.log(`${a} kotta ${b} dan ${a} kotta ${c} dan`);
} else if (a > b && a < c) {
    console.log(`${a} kotta ${b} dan ${a} kichkina ${c} dan`);
} else if (a < b && a > c) {
    console.log(`${a} kichkina ${b} dan ${a} kotta ${c} dan`);
} else if (a < b && a < c) {
    console.log(`${a} kichik ${b} dan ${a} kichkina ${c} dan`);
} else if (a === b && a === c && b === c) {
    console.log(`${a} teng ${b} teng ${c}`);
} else {
    console.log("error");
}
