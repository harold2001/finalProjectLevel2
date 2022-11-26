let arr = [1, 2, 3, 4]

function sortRandom(arr) {

    let newArr = arr.sort(() => Math.random() - 0.5)

    return newArr
}

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

const divBody = document.querySelector("#body-div")
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

export default {
    setDOM,
    setButtonNext,
    removeButtonNext,
    setDOMCountry
}