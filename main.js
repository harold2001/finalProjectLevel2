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

    const i = m.getRandom(0, 2);

    const randomDOM = [v.setDOMCapital, v.setDOMCountry];
    randomDOM[i](data);

    const buttons = [...document.querySelectorAll(".btn")];
    const buttonsFalse = [...document.querySelectorAll(".false")];
    const buttonTrue = $(".true");

    buttonTrue.addEventListener("click", () => {
        
        score++;
        attempts++;

        //Agregar la clase "onTrue" para agregarle estilos
        buttonTrue.classList.add("onTrue");

        buttons.forEach(btn => btn.disabled = true);

        v.setButtonNext();

        //Corroborar botón y removerlo con click.
        const buttonNext = $("#buttonNext")
        if (buttonNext) {

            buttonNext.addEventListener("click", async () => {
                await start()
                v.removeButtonNext()
            })
        }

        if (attempts === 10) {
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
            
            //Agregar la clase "onTrue" y "onFalse" para agregarles estilos
            buttonF.classList.add("onFalse");
            buttonTrue.classList.add("onTrue");

            buttons.forEach(btn => btn.disabled = true);

            v.setButtonNext()

            //Corroborar botón y removerlo con click.
            const buttonNext = $("#buttonNext")
            if (buttonNext) {

                buttonNext.addEventListener("click", async () => {
                    await start()
                    v.removeButtonNext()
                })
            }

            if (attempts === 10) {
                v.removeButtonNext()
                v.resultsDOM(score);
                buttonTryAgain();
                attempts = 0
                score = 0;
            }
        })
    });
};

//Botón del resultado
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