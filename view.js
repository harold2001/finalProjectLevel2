let arr = [1, 2, 3, 4]

function sortRandom(arr) {

   let newArr = arr.sort(() => Math.random() - 0.5)

   return newArr
}
const divBody = document.querySelector("#body-div")

let arrRandom = sortRandom(arr);
let arrRandom1 = arrRandom[0] - 1;
let arrRandom2 = arrRandom[1] - 1;
let arrRandom3 = arrRandom[2] - 1;
let arrRandom4 = arrRandom[3] - 1;

let arrLetras = ["A", "B", "C", "D"];

export function setDOMCapital(obj) {

   const divElem = document.querySelector("#demo");

   divElem.innerHTML = `
    
   <p class="h3 align-self-start ps-3">${obj.capital} is the capital of</p>

   <div class="d-flex flex-column gap-4 px-3" style="width:100%">
      <div class="order-${arrRandom[0]}">
         <button class="options true d-flex gap-3 btn py-2 px-3">
            <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom1]}</span>
            <span class="input-group-text bg-transparent border-0 p-0">${obj.pais}</span>
         </button>
      </div>
  
      <div class="order-${arrRandom[1]}">
         <button class="options false d-flex gap-3 btn py-2 px-3">
            <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom2]}</span>
            <span class="input-group-text bg-transparent border-0 p-0">${obj.pais1}</span>
         </button>
      </div>
  
      <div class="order-${arrRandom[2]}">
         <button class="options false d-flex gap-3 btn py-2 px-3">
            <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom3]}</span>
            <span class="input-group-text bg-transparent border-0 p-0">${obj.pais2}</span>
         </button>
      </div>
  
      <div class="order-${arrRandom[3]}">
         <button class="options false d-flex gap-3 btn py-2 px-3">
            <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom4]}</span>
            <span class="input-group-text bg-transparent border-0 p-0">${obj.pais3}</span>
         </button>
      </div>
    `
}

export function setDOMCountry(obj) {

   const divImg = document.querySelector("#img-flag");

   divImg.innerHTML = `

   <div class="ps-3">
      <img class="rounded" src="${obj.bandera}" style="width: 25%; object-fit: contain"/>
   </div>
   
   `

   const divElem = document.querySelector("#demo");

   divElem.innerHTML = `

    <p class="h3 align-self-start ps-3">Which country does this flag belong to?</p>

    <div class="d-flex flex-column gap-4 px-3" style="width:100%">
    <div class="order-${arrRandom[0]}">
       <button class="options true d-flex gap-3 btn py-2 px-3">
          <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom1]}</span>
          <span class="input-group-text bg-transparent border-0 p-0">${obj.pais}</span>
       </button>
    </div>

    <div class="order-${arrRandom[1]}">
       <button class="options false d-flex gap-3 btn py-2 px-3">
          <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom2]}</span>
          <span class="input-group-text bg-transparent border-0 p-0">${obj.pais1}</span>
       </button>
    </div>

    <div class="order-${arrRandom[2]}">
       <button class="options false d-flex gap-3 btn py-2 px-3">
          <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom3]}</span>
          <span class="input-group-text bg-transparent border-0 p-0">${obj.pais2}</span>
       </button>
    </div>

    <div class="order-${arrRandom[3]}">
       <button class="options false d-flex gap-3 btn py-2 px-3">
          <span class="input-group-text bg-transparent border-0 p-0">${arrLetras[arrRandom4]}</span>
          <span class="input-group-text bg-transparent border-0 p-0">${obj.pais3}</span>
       </button>
    </div>
    `
}


const divButton = document.createElement("div");

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

export function resultsDOM(score) {

   divBody.innerHTML = `
   <div
   id="demo"
   class="d-flex flex-column justify-content-center align-items-center gap-4"
   style="width: 100%; height: 100%">

      <div class="text-center mb-5" style="height: 25%; width: 100%;">
         <img
            src="./imgs/undraw_winners_ao2o 2.svg"
            style="height: 100%;" />
      </div>

      <div class="mb-4" style="height: 20%; width: 100%;">
         <p class="fw-bolder fs-1 text-center">Results</p>
         <p class="text-center">You got <span class="fs-1 fw-bolder">${score}</span>  correct answers</p>
      </div>

      <div class="text-center mt-3" style="height: 10%; width: 100%;">
         <button id="tryAgain" class="btn btn-outline-secondary rounded-3 fw-semibold" style="width: 40%; height: 100%;">
            Try again
         </button>
      </div>

   </div>
   `
}


export default {
   setDOMCapital,
   setButtonNext,
   removeButtonNext,
   setDOMCountry,
   resultsDOM
}