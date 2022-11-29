export const URL = `https://restcountries.com/v3.1/all`;

export function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}

export async function getData(URL) {

    return fetch(URL)
        .then(response => response.json())
        .then(response => {

            let pais = "";
            let capital = "";
            let bandera = "";
            let pais1 = "";
            let pais2 = "";
            let pais3 = "";

            while (true) {
                let i = getRandom(1, 250);
                let a = getRandom(1, 250);
                let b = getRandom(1, 250);
                let c = getRandom(1, 250);

                pais = response[i].name.common;
                capital = response[i].capital;
                bandera = response[i].flags.svg;
                pais1 = response[a].name.common;
                pais2 = response[b].name.common;
                pais3 = response[c].name.common;


                if (capital && bandera && pais1 && pais2 && pais3) {
                    break
                }
            }

            const datos = {};

            datos.pais = pais;
            datos.capital = capital[0];
            datos.bandera = bandera;
            datos.pais1 = pais1;
            datos.pais2 = pais2;
            datos.pais3 = pais3;

            return datos;
        })
        .catch(err => console.log(err))

}

export default {
    URL,
    getData,
    getRandom
}


