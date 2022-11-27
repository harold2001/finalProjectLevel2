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
export function setDOM(obj) {

   const divElem = document.querySelector("#demo");

   divElem.innerHTML = `
    
    <p class="h3">${obj.capital} is the capital of</p>

    <div class="container-fluid order-${arrRandom[0]}">
       <button class="true d-flex gap-3 btn btn-outline-primary py-0">
          <span class="input-group-text bg-transparent border-0">${arrLetras[arrRandom1]}</span>
          <span class="input-group-text bg-transparent border-0">${obj.pais}</span>
       </button>
    </div>

    <div class="container-fluid order-${arrRandom[1]}">
       <button class="false d-flex gap-3 btn btn-outline-primary py-0">
          <span class="input-group-text bg-transparent border-0">${arrLetras[arrRandom2]}</span>
          <span class="input-group-text bg-transparent border-0">${obj.pais1}</span>
       </button>
    </div>

    <div class="container-fluid order-${arrRandom[2]}">
       <button class="false d-flex gap-3 btn btn-outline-primary py-0">
          <span class="input-group-text bg-transparent border-0">${arrLetras[arrRandom3]}</span>
          <span class="input-group-text bg-transparent border-0">${obj.pais2}</span>
       </button>
    </div>

    <div class="container-fluid order-${arrRandom[3]}">
       <button class="false d-flex gap-3 btn btn-outline-primary py-0">
          <span class="input-group-text bg-transparent border-0">${arrLetras[arrRandom4]}</span>
          <span class="input-group-text bg-transparent border-0">${obj.pais3}</span>
       </button>
    </div>
    `
}

export function setDOMCountry(obj) {

   const divElem = document.querySelector("#demo");

   divElem.innerHTML = `

    <div class="row">
        <div class="col-3">
            <img class="rounded" src="${obj.bandera}" style="width: 100%;"/>
        </div>
    </div>
    
    <p class="h3">Which country does this flag belong to?</p>

    <div class="container-fluid order-${arrRandom[0]}">
       <button class="true d-flex gap-3 btn btn-outline-primary py-0">
          <span class="input-group-text bg-transparent border-0">${arrLetras[arrRandom1]}</span>
          <span class="input-group-text bg-transparent border-0">${obj.pais}</span>
       </button>
    </div>

    <div class="container-fluid order-${arrRandom[1]}">
       <button class="false d-flex gap-3 btn btn-outline-primary py-0">
          <span class="input-group-text bg-transparent border-0">${arrLetras[arrRandom2]}</span>
          <span class="input-group-text bg-transparent border-0">${obj.pais1}</span>
       </button>
    </div>

    <div class="container-fluid order-${arrRandom[2]}">
       <button class="false d-flex gap-3 btn btn-outline-primary py-0">
          <span class="input-group-text bg-transparent border-0">${arrLetras[arrRandom3]}</span>
          <span class="input-group-text bg-transparent border-0">${obj.pais2}</span>
       </button>
    </div>

    <div class="container-fluid order-${arrRandom[3]}">
       <button class="false d-flex gap-3 btn btn-outline-primary py-0">
          <span class="input-group-text bg-transparent border-0">${arrLetras[arrRandom4]}</span>
          <span class="input-group-text bg-transparent border-0">${obj.pais3}</span>
       </button>
    </div>
    `
}


const divButton = document.createElement("div");

export function setButtonNext() {

   divBody.appendChild(divButton)
   divButton.innerHTML = `
    <div class="row justify-content-end">
        <button id="buttonNext" class="btn btn-primary" style="width: 20%;">NEXT</button>
    </div>
    `
}

export function removeButtonNext() {

   divBody.removeChild(divButton);
}

export function resultsDOM() {

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
         <p class="text-center">You got <span class="fs-1 fw-bolder">4</span>  correct answers</p>
      </div>

      <div class="text-center mt-3" style="height: 10%; width: 100%;">
         <button class="btn btn-outline-secondary rounded-3 fw-semibold" style="width: 40%; height: 100%;">
            Try again
         </button>
      </div>

   </div>
   `
}


export default {
   setDOM,
   setButtonNext,
   removeButtonNext,
   setDOMCountry,
   resultsDOM
}