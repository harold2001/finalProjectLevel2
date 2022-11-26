export const URL = `https://restcountries.com/v3.1/all`;

function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}

export async function getData(URL) {

    return fetch(URL)
        .then(response => response.json())
        .then(response => {

            let pais = "";
            let bandera= "";
            let pais1 = "";
            let pais2 = "";
            let pais3 = "";

            let capital = "";
            let op1 = "";
            let op2 = "";
            let op3 = "";

            while (true) {
                let i = getRandom(1, 250);
                let a = getRandom(1, 250);
                let b = getRandom(1, 250);
                let c = getRandom(1, 250);

                pais = response[i].name.common;
                bandera = response[i].flags.svg;
                pais1 = response[a].name.common;
                pais2 = response[b].name.common;
                pais3 = response[c].name.common;


                capital = response[i].capital;
                op1 = response[a].capital;
                op2 = response[b].capital;
                op3 = response[c].capital;
                
                if (capital && bandera && op1 && op2 && op3) {
                    break
                }
                
            }
            
            const datos = {};
            
            datos.pais = pais;
            datos.bandera = bandera;
            datos.pais1 = pais1;
            datos.pais2 = pais2;
            datos.pais3 = pais3;

            datos.capital = capital[0];
            datos.op1 = op1[0];
            datos.op2 = op2[0];
            datos.op3 = op3[0];

            return datos;
        })
        .catch(err => console.log(err))

}

export default {
    URL,
    getData
}


// <div class="row">
// <div class="col-3">
//    <img class="rounded" src="https://flagcdn.com/th.svg" style="width: 100%;"/>
// </div>
// </div>