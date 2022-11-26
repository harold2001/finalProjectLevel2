import v from "./view.js"
import m from "./modal.js"
function $(selector) {
    return document.querySelector(selector);
}

document.addEventListener("DOMContentLoaded", start)
let score = 0;


async function start() {
    let attempts = 0

    while (attempts < 5) {
        const data = await m.getData(m.URL);
        console.log(data);
        v.setDOM(data)

        const buttonsFalse = [...document.querySelectorAll(".false")];
        const buttons = [...document.querySelectorAll(".btn")];
        const buttonTrue = $(".true");

        buttonTrue.addEventListener("click", () => {

            buttonTrue.classList.add("onTrue")
            buttons.forEach(btn => btn.disabled = true);
            // score++;
            // attempts++;

            v.setButtonNext()

            const buttonNext = $("#buttonNext")
            if (buttonNext) {

                buttonNext.addEventListener("click", async () => {
                    await start()
                    v.removeButtonNext()
                })
            } else {

                v.setButtonNext()
            }
            // alert("puntaje: " + score)
            // alert("intentos: " + attempts)

        })

        buttonsFalse.forEach((buttonF, index, arr) => {

            buttonF.addEventListener("click", () => {

                // attempts++

                buttonF.classList.add("on")
                buttonTrue.classList.add("onTrue");
                buttons.forEach(btn => btn.disabled = true);

                v.setButtonNext()

                const buttonNext = $("#buttonNext")
                if (buttonNext) {

                    buttonNext.addEventListener("click", async () => {
                        await start()
                        v.removeButtonNext()
                    })
                } else {

                    v.setButtonNext()
                }
                // alert("intentos:" + attempts)
            })
        })

        attempts++
        if (attempts === 6) {
            break;
        }
        console.log(attempts);
    }


}





































            // let activeDis = arr.find(btn => btn.classList[6] === "on")

            // if (activeDis) {

            //     v.setNext()
            //     const buttonNext = document.querySelector("#buttonNext")
            //     console.log(buttonNext);
            //     buttonNext.addEventListener("click", async () => {
            //         await start()
            //     })
            // }