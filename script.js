const button = document.querySelector("button")
const select = document.querySelector("select")
const main = document.querySelector("main")

button.addEventListener("click", function() {
    if (select.value != "full exam") {
        main.innerHTML = ""
        main.insertAdjacentHTML("beforeend",
            `
            <h3>${select.value}</h3>
            <textarea></textarea>
            `)
    } else {
        main.innerHTML = ""
        for (let index = 1; index <= 16; index++) {
            main.insertAdjacentHTML("beforeend",
                `
                <h3>${index + ". question"}</h3>
                <textarea></textarea>
                `)

        }

    }
})
