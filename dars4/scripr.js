//1-misol
//Ints massivi berilgan bo'lsa, agar massiv uzunligi 1 yoki undan ortiq bo'lsa va birinchi element va oxirgi element teng bo'lsa, true qiymatini qaytaring.

let SameFirstLast = [1, 2, 3] //([1, 2, 3, 1]) → true    //([1, 2, 1]) → true
if (SameFirstLast[0] === SameFirstLast[SameFirstLast.length - 1]) {
    console.log("True");
} else {
    console.log("False");
}

//2-misol
//Ints massivi berilgan bo'lsa, massivdagi dastlabki 2 ta elementning yig'indisini qaytaring. Agar massiv uzunligi 2 dan kichik bo'lsa, mavjud elementlarni jamlang, agar massiv uzunligi 0 bo'lsa, 0 ni qaytaring.

let sum2 = [1, 2, 3]
if (sum2.length === 3) {
    console.log(sum2[0] + sum2[1]);
} else{
    console.log("False");
}

//3-misol
//Istalgan uzunlikdagi int massivi berilgan bo'lsa, uning dastlabki 2 elementidan iborat yangi massivni qaytaring. Agar massiv uzunligi 2 dan kichik bo'lsa, mavjud bo'lgan elementlardan foydalaning.
let frontPiece=[1, 2, 3]
// frontPiece=[1, 2]
// frontPiece=[1]
let frontPiece2=frontPiece
console.log(frontPiece2[0], frontPiece2[1]);