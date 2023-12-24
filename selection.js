let options = document.getElementById("selection-content")

// gets first part and appends the selection thingy: ▌
options.children[0].innerHTML += "▌"

let selected = 0
let current_view = "home"
document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
        if (selected > 0) {
            options.children[selected].innerHTML = options.children[selected].innerHTML.replace("▌", "")
            options.children[selected - 1].innerHTML += "▌"
            selected--

        }
    }
    if (e.key == "ArrowDown") {
        if (selected < options.children.length - 1) {
            options.children[selected].innerHTML = options.children[selected].innerHTML.replace("▌", "")
            options.children[selected + 1].innerHTML += "▌"
            selected++

        }
    }

    if (e.key == "Enter") {
        document.getElementById(current_view).style.display = "none"
        options.style.display = "none"
        setTimeout(() => {
            options.style.display = "block"
            document.getElementById(options.children[selected].className).style.display = "block"
        }, 100)
        current_view = options.children[selected].className


    }
})
