
console.log("KALENDAR");
let date = new Date()
if (date.getMonth() === 0) {
    console.log(date.getDate() + " - Yanvar" + date.getFullYear());
}else if (date.getMonth() === 1){
    console.log(date.getDate() + " - Fevral"  + date.getFullYear() + " - Yil");
}else if (date.getMonth() === 2){
    console.log(date.getDate() + " - Mart"  + date.getFullYear() + " - Yil");
}else if (date.getMonth() === 3){
    console.log(date.getDate() + " - Aprel"  + date.getFullYear() + " - Yil");
}else if (date.getMonth() === 4){
    console.log(date.getDate() + " - May"  + date.getFullYear() + " - Yil");
}else if (date.getMonth() === 5){
    console.log(date.getDate() + " - Iyun"  + date.getFullYear() + " - Yil");
}else if (date.getMonth() === 6){
    console.log(date.getDate() + " - Iyul"  + date.getFullYear() + " - Yil");
}else if (date.getMonth() === 7){
    console.log(date.getDate() + " - Avgust"  + date.getFullYear() + " - Yil");
}else if (date.getMonth() === 8){
    console.log(date.getDate() + " - Sentyabr"  + date.getFullYear() + " - Yil");
}else if (date.getMonth() === 9){
    console.log(date.getDate() + " - Oktyabr "  + date.getFullYear() + " - Yil");
}else if (date.getMonth() === 10){
    console.log(date.getDate() + " - Noyabr"  + date.getFullYear() + " - Yil");
}else if (date.getMonth() === 11){
    console.log(date.getDate() + " - Dekabr"  + date.getFullYear() + " - Yil");
}else{
    console.log("Eror");
}


console.log("Soat");
let minut = 0
let sec = 0
let count = 0
setInterval(() => {

    sec += 1

    if (sec > 59) {

        sec = 0
        minut += 1
    }

    console.log(minut + ":" + sec);
}, 1000);

