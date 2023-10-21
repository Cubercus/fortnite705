// let i = 10
// while (i >= 0) {
//     console.log(i);
// }

// for (let i = 10; i >= 0; i-- ) {
//     console.log(i);
// }

let massiv = [10, 5, 20, 1]

let sum = 0 

for (let i = 0; i < massiv.length; i++) {
if(massiv[i]%2 === 0){
    console.log(massiv[i]);
}else if (massiv[i]%2 >>> 0 ){
    console.log(massiv[i])
}
}
// (massiv[0] % 2 === 0 && massiv[massiv.length-1] % 2 === 0) 
