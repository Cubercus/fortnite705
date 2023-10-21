let text = document.querySelectorAll('.text')
for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
        text[i].style.backgroundColor = "red"
    }
}

