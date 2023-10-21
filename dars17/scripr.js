// let.style.cssText = '
// '

//mashq
// let body = document.querySelector("body")
// let div = document.createElement("div")
// let h1 = document.createElement("h1")
// let p = document.createElement("p")
// body.prepend(div)
// div.prepend(h1)
// div.append(p)
// p.innerHTML = "abc"
// h1.innerHTML = "Muhammadaziz"


// let div = document.createElement("div") div, text, element qo'shgani
// body.append(div) oxirida div qo'shadi
// body.prepend(div)boshiga div qo'shadi



// atribut qo'shish
// let.setAtribute('scr', "scr otii"...)alt ham shunaqa




//mashq
let body = document.querySelector("body")
let head = document.createElement("div")
let h1 = document.createElement("h1")
let p = document.createElement("p")
let img = document.createElement("img")
let box = document.createElement("div")
let cube1 = document.createElement("div")
let cube2 = document.createElement("div")
body.prepend(head)
head.prepend(h1)
body.append(p)
body.append(img)
body.append(box)
box.prepend(cube1)
box.append(cube2)
img.setAttribute('src', "https://us-tuna-sounds-images.voicemod.net/cc14ddcb-b5fb-48d3-b3e9-8de648a761b1-1683838484702.jpg")
img.setAttribute('alt', "obame")
p.innerHTML = "Lorem ipsum dolor sit amet."
h1.innerHTML = "Alphabet"
head.style.cssText = `
background-color: aqua;
height: 50px;
width: 100%;
align-items: center;
display: flex;
justify-content: center;
`
box.style.cssText = `
align-items: center;
display: flex;
justify-content:    space-between; 
gap: 20px;
`
cube1.style.cssText = `
width: 100px;
height: 100px;
background-color: chartreuse;
`
cube2.style.cssText = `
width: 100px;
height: 100px;
background-color: chartreuse;
`



















