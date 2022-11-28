import v from "./view.js"
import m from "./modal.js"

function $(selector) {
    return document.querySelector(selector);
}

document.addEventListener("DOMContentLoaded", start)

let score = 0;
let attempts = 0;

async function start() {

    const data = await m.getData(m.URL);
    // console.log(data);

    const i = m.getRandom(0, 2)
    // console.log(i);

    const randomDOM = [v.setDOMCapital, v.setDOMCountry];
    randomDOM[i](data)

    const buttonsFalse = [...document.querySelectorAll(".false")];
    const buttons = [...document.querySelectorAll(".btn")];
    const buttonTrue = $(".true");

    buttonTrue.addEventListener("click", () => {

        buttonTrue.classList.add("onTrue")
        buttons.forEach(btn => btn.disabled = true);
        score++;
        attempts++;

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

        if (attempts === 1) {
            // v.setButtonNext()
            v.removeButtonNext()
            v.resultsDOM(score);
            buttonTryAgain();
            attempts = 0;
            score = 0;
        }
    })

    buttonsFalse.forEach((buttonF, index, arr) => {

        buttonF.addEventListener("click", () => {

            attempts++

            buttonF.classList.add("on");
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
            console.log(attempts);

            if (attempts === 1) {
                // v.setButtonNext();
                v.removeButtonNext()
                v.resultsDOM(score);
                buttonTryAgain();
                attempts = 0
                score = 0;
            }
        })
    })

}

function buttonTryAgain() {
    const buttonDOM = $("#tryAgain");

    buttonDOM.addEventListener("click", () => {
        start();
    })
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