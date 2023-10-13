const linkMain = document.querySelector("a")

document.addEventListener ("keyup", (e) => {
    if (e.code == "Backspace") {
        linkMain.click()
    }
})
