const divBody = document.querySelector("#body-div");
const divElem = document.querySelector("#demo");
const divButton = document.createElement("div");


function sortRandom() {
   let arr = [0, 1, 2, 3]

   let newArr = arr.sort(() => Math.random() - 0.5)

   return newArr
}

let arrLetras = ["A", "B", "C", "D"];

export function setDOMCapital(obj) {

   let arrRandom = sortRandom();

   divElem.innerHTML = `

   <div class="text-end position-absolute end-0" style="width: 35%; top: -20%;">
      <img
         src="./imgs/undraw_adventure_4hum 1.svg"
         style="width: 100%"/>
   </div>
    
   <p class="h3 align-self-start ps-3">${obj.capital} is the capital of</p>

   <div class="d-flex flex-column gap-4 px-3" style="width:100%">
      <div class="order-${arrRandom[0]}">
         <button class="options true d-flex gap-3 btn py-2 px-3">
            <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom[0]]}</span>
            <span class="input-group-text bg-transparent border-0 p-0 text-wrap text-start">${obj.pais}</span>
         </button>
      </div>
  
      <div class="order-${arrRandom[1]}">
         <button class="options false d-flex gap-3 btn py-2 px-3">
            <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom[1]]}</span>
            <span class="input-group-text bg-transparent border-0 p-0 text-wrap text-start">${obj.pais1}</span>
         </button>
      </div>
  
      <div class="order-${arrRandom[2]}">
         <button class="options false d-flex gap-3 btn py-2 px-3">
            <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom[2]]}</span>
            <span class="input-group-text bg-transparent border-0 p-0 text-wrap text-start">${obj.pais2}</span>
         </button>
      </div>
  
      <div class="order-${arrRandom[3]}">
         <button class="options false d-flex gap-3 btn py-2 px-3">
            <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom[3]]}</span>
            <span class="input-group-text bg-transparent border-0 p-0 text-wrap text-start">${obj.pais3}</span>
         </button>
      </div>
    `
}

export function setDOMCountry(obj) {

   let arrRandom = sortRandom();

   divElem.innerHTML = `

   <div class="text-end position-absolute end-0" style="width: 35%; top: -15%;">
      <img
         src="./imgs/undraw_adventure_4hum 1.svg"
         style="width: 100%"/>
   </div>

   <div class="ps-3">
      <img class="rounded" src="${obj.bandera}" style="width: 25%; object-fit: contain"/>
   </div>

    <p class="h3 align-self-start ps-3">Which country does this flag belong to?</p>

    <div class="d-flex flex-column gap-4 px-3" style="width:100%">
    <div class="order-${arrRandom[0]}">
       <button class="options true d-flex gap-3 btn py-2 px-3">
          <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom[0]]}</span>
          <span class="input-group-text bg-transparent border-0 p-0 text-wrap text-start">${obj.pais}</span>
       </button>
    </div>

    <div class="order-${arrRandom[1]}">
       <button class="options false d-flex gap-3 btn py-2 px-3">
          <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom[1]]}</span>
          <span class="input-group-text bg-transparent border-0 p-0 text-wrap text-start">${obj.pais1}</span>
       </button>
    </div>

    <div class="order-${arrRandom[2]}">
       <button class="options false d-flex gap-3 btn py-2 px-3">
          <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom[2]]}</span>
          <span class="input-group-text bg-transparent border-0 p-0 text-wrap text-start">${obj.pais2}</span>
       </button>
    </div>

    <div class="order-${arrRandom[3]}">
       <button class="options false d-flex gap-3 btn py-2 px-3">
          <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom[3]]}</span>
          <span class="input-group-text bg-transparent border-0 p-0 text-wrap text-start">${obj.pais3}</span>
       </button>
    </div>
    `
}

export function resultsDOM(score) {

   divElem.innerHTML = `
   <div
   id="demo"
   class="d-flex flex-column justify-content-center align-items-center gap-4"
   style="width: 100%; height: 100%">
   

      <div class="text-center mb-3 position-relative" style="width: 60%; bottom:25px">
         <img
            src="./imgs/undraw_winners_ao2o 2.svg"
            style="width:100%" />
      </div>

      <div class="" style="width: 100%;">
         <p class="fw-bolder fs-1 text-center">Results</p>
         <p class="text-center fs-5 fw-light">You got <span id="score" class="fs-1 fw-bold">${score}</span>  correct answers</p>
      </div>

      <div class="text-center position-relative" style="width: 100%; top: 25px">
         <button id="tryAgain" class="btn btn-outline-secondary rounded-3 fw-semibold px-4 py-2" style="border: 2px solid #1D355D; color: #1D355D">
            Try again
         </button>
      </div>

   </div>
   `
}

export function setButtonNext() {

   divBody.appendChild(divButton)
   divButton.setAttribute("class", "position-relative")
   divButton.classList.add("d-flex")
   divButton.classList.add("justify-content-end")
   divButton.setAttribute("id", "boton-next")

   divButton.innerHTML = `
   <div class="d-flex justify-content-end pe-3 col-3">
      <button id="buttonNext" class="btn rounded-3 text-white fw-bold py-2 px-3">Next</button>
   </div>
    `
}

export function removeButtonNext() {

   divBody.removeChild(divButton);
}

export default {
   setDOMCapital,
   setButtonNext,
   removeButtonNext,
   setDOMCountry,
   resultsDOM
}