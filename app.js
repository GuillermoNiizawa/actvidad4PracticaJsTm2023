// E1

function esPrimo(numero) {
    let cadena = numero.toString();
    let ultimoDigito = cadena.charAt(cadena.length - 1)

    if (numero <= 1 || (numero % 2 == 0 && numero != 2) || (ultimoDigito == 5 && numero != 5))

        return `${numero}, no es un número Primo`;

    for (let i = 3; i <= Math.sqrt(numero) | 0; i += 2)


        if (numero % i == 0)

            return `${numero}, no es un número Primo`;

    return `${numero}, es un número Primo`;

}


console.log(esPrimo(157));
console.log(esPrimo(6));


///////////////////////////////////////////////////////////////////////////////////
// E2
function sumaRestaMatrices(matriz1, matriz2, operador ) {
    if (matriz1.length !== matriz2.length) {
        return "No se puede operar, las matrices deben tener la misma cantidad de filas.";
    }
    for (let i = 0; i < matriz1.length; i++) {
        if (matriz1[i].length !== matriz2[i].length) {
            return "No se puede operar, las matrices deben tener la misma cantidad de columnas en todas las filas.";
        }
    }

    let matrizResultado = [];
    let fila = matriz1.length;
    let columna = matriz1[0].length;

    for (let i = 0; i < fila; i++) {
        let filaResultado = [];

        for (let j = 0; j < columna; j++) {
            let dato1 = matriz1[i][j];
            let dato2 = matriz2[i][j];
            let datoR;
            
            switch (operador){ 
              case "suma":
                datoR = dato1 + dato2;
              break;
              case "resta": 
                datoR = dato1 - dato2;
              break;
            }
            filaResultado.push(datoR);
        }
        matrizResultado.push(filaResultado);
    }
    return matrizResultado;
}

console.log(sumaRestaMatrices([
    [2, 3, 5],
    [4, 5, 7],
    [8, 6, 2],
    [1, 8, 3]],
    
    [[8, 3, 9],
    [1, 8, 3],
    [5, 2, 5],
    [2, 3, 5]]
    
    ,"suma"))


//////////////////////////////////////////////////////////
// E3

function sumaRango(x, y) {
    rango = 0
    for (let i = x; i <= y; i++) {

        rango += i;
    }
    return rango;

};
console.log(sumaRango(1664, 5465132))


///////////////////////////////////////////////////////////////
// E4

function contarVocales(texto) {
    let vocales = /[aeiouáéíóúäëïöü]/gi;
    let grupo = texto.match(vocales);
    return grupo.length;
};

console.log(contarVocales("egfeaeIUGUIOFIOEUFIUefuiF   IUFGIOFG  eiugIUF EGIFeafe"))


//////////////////////////////////////
// E5 

function unico(listado) {
    let lista = listado.split(',');

    let i = 0;

    while (i < lista.length) {
        let j = i + 1;

        while (j < lista.length) {

            if (lista[i].trim() === lista[j].trim()) {
                lista.splice(j, 1);
            } else {
                j++;
            }
        }
        i++;
    }

    return lista.join(', ');
}

console.log(unico("mirta, mirta, marta, jauna, mirta, josefa, marta, jauna, mirta"));


/////////////////////////////////////////////////////////////////////
// E6


function invertirCadena(cadena) {
    let cadenaInv = "";

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInv += cadena[i];
    }
    return cadenaInv;
};
console.log(invertirCadena("Hola Mundo"));


/////////////////////////////////////////////////////////////////////
// DOM E1


const carrusel = document.getElementById("carrusel");
const imagenes = ["tren1.jpg", "tren2.jpg", "tren3.jpg"];
const prev = document.getElementById("prev")
const next = document.getElementById("next")
let index = 0;


next.addEventListener("click", () => {
    if (index < imagenes.length - 1) {
        index++
    } else {
        index = 0;
    }
    carrusel.src = `images/${imagenes[index]}`;
});

prev.addEventListener("click", ()=> {
    if (index > 0) {
        index--
    } else {
        index = imagenes.length - 1;
    }
    carrusel.src = `images/${imagenes[index]}`;
});


////////////////////////////////////////////////////
// DOM E2

const parrafo = document.getElementById("parrafo");
const btn = document.getElementById("btn");
const h4 = document.getElementById("btnTexto")

btn.addEventListener("click", () => {
    parrafo.classList.toggle("agrandarFuente")
    if (parrafo.classList.contains("agrandarFuente")) {
        btn.innerText = ("Achicar Texto")
    } else {
        btn.innerText = ("Agrandar Texto")
    }
});


//////////////////////////////////////////////////////
// DOM E3

const tarjetas = document.querySelectorAll(".tarjeta");
const descripciones = document.querySelectorAll(".oculto");
const mass = document.querySelectorAll(".mas")

tarjetas.forEach((tarjeta, index) => {
    tarjeta.addEventListener("click", () => {
        descripciones[index].classList.toggle("oculto")
        if (descripciones[index].classList.contains("oculto")) {
            mass[index].innerText = "Más..."
        } else {
            mass[index].innerText = "Menos..."
        }
    })
});
