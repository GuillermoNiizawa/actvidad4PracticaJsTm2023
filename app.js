
function esPrimo(numero) {

    if (numero <= 1 || (numero % 2 == 0 && numero != 2)) //Sí el número es menor o igual a 1, o sí el número es divisible por 2 y no es 2,
        //entonces no es un Número Primo ya que por definición 1 y los menores a uno, no son primos.
        //y cualquier número divisible por 2, salvo el 2, no es primo.

        return `${numero}, no es un número Primo`;

    for (let i = 3; i <= Math.sqrt(numero) | 0; i += 2) // definido lso números de 2 para abajo, podemos arrancar de 3, 
        //que la condición de "i" sea "<=" a la raíz cuadrada del número,
        // refiere a que sí número es divisible por algún número primo menor
        // a la raiz de número, los superiores seran múltiplos de estos.
        // Iteración de 2 en 2 se usa ya que ningun número par después del 2 
        // es primo y no hace falta comprobarlo.


        if (numero % i == 0)                            // Entonces si el resto de la división entre Número y i es 0
            // podemos decir que no va a ser un número primo

            return `${numero}, no es un número Primo`;

    return `${numero}, es un número Primo`;             // Al no cumplirse ninguna de las otras condiciones anteriores, quedaondo sólo que
    // es un número primo

}


console.log(esPrimo(157));
console.log(esPrimo(6));


///////////////////////////////////////////////////////////////////////////////////



function sumaMatrices(matriz1, matriz2) {
    if (matriz1.length != matriz2.length || matriz1[0].length != matriz2[0].length) {
        throw "error, las matrices no son de igual dimensión";
    }
    let matrizResultado = [];
    let fila = matriz1.length
    console.log(fila)
    let columna = matriz1[0].length
    console.log(columna)

    for (let i = 0; i < fila; i++) {
        let filaResultado = [];

        for (let j = 0; j < columna; j++) {
            let dato1 = (matriz1[i][j]);
            let dato2 = (matriz2[i][j]);
            let datoR = dato1 + dato2;

            filaResultado.push(datoR);
        }
        matrizResultado.push(filaResultado);
    }
    return matrizResultado;
}
console.log(sumaMatrices([

    [2, 3, 5],
    [4, 5, 7],
    [8, 6, 5],
    [1, 8, 3]],

    [[8, 3, 9],
    [1, 8, 3],
    [5, 2, 5],
    [2, 3, 5]]));
//////////////////////////////////////////////////////////

function sumaRango(x, y) {
    rango = 0
    for (let i = x; i <= y; i++) {

        rango += i;
    }
    return rango;

};
console.log(sumaRango(1664, 5465132))


///////////////////////////////////////////////////////////////

function contarVocales(texto) {

    let vocales = /[aeiouáéíóúäëïöü]/gi;

    let grupo = texto.match(vocales);



    return grupo.length;


};

console.log(contarVocales("egfeaeIUGUIOFIOEUFIUefuiF   IUFGIOFG  eiugIUF EGIFeafe"))


////////////////////////////////////// 

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


function invertirCadena(cadena) {
    let cadenaInv = "";

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInv += cadena[i];
    }
    return cadenaInv;
};
console.log(invertirCadena("Hola Mundo"));


/////////////////////////////////////////////////////////////////////



let carrusel = document.getElementById("carrusel");
let imagenes = ["tren1.jpg", "tren2.jpg", "tren3.jpg"];
let index = 0;
let prev = document.getElementById("prev")
let next = document.getElementById("next")

function nextImg() {
    if (index < imagenes.length - 1) {
        index++
    } else {
        index = 0;
    }
    carrusel.src = `images/${imagenes[index]}`;
}
next.addEventListener("click", nextImg);


function prevImg() {
    if (index > 0) {
        index--
    } else {
        index = imagenes.length - 1;
    }
    carrusel.src = `images/${imagenes[index]}`;
}
prev.addEventListener("click", prevImg);


////////////////////////////////////////////////////

let parrafo =document.getElementById("parrafo");
let btn=document.getElementById("btn");
let h4=document.getElementById("btnTexto")

function cambiarTamaño(){
parrafo.classList.toggle("agrandarFuente")

if(parrafo.classList.contains("agrandarFuente")){
    btn.innerText =("Achicar Texto")
   
} else{btn.innerText =("Agrandar Texto")}

};


btn.addEventListener("click", cambiarTamaño);



//////////////////////////////////////////////////////
//t1
let tarjeta=document.getElementById("tarjeta");
let descripcion=document.getElementById("oculto");
let mas=document.getElementById("mas")

function masInfo(){
descripcion.classList.toggle("oculto")
if(descripcion.classList.contains("oculto")){
    mas.innerText = "Más..."
}else{mas.innerText = "Menos..."}


};

tarjeta.addEventListener("click",masInfo)

//t2
let tarjeta2=document.getElementById("tarjeta2");
let descripcion2=document.getElementById("oculto2");
let mas2=document.getElementById("mas2")

function masInfo2(){

descripcion2.classList.toggle("oculto")
if(descripcion2.classList.contains("oculto")){
    mas2.innerText = "Más..."
}else{mas2.innerText = "Menos..."}

};

tarjeta2.addEventListener("click",masInfo2)

//t3
let tarjeta3=document.getElementById("tarjeta3");
let descripcion3=document.getElementById("oculto3");
let mas3=document.getElementById("mas3")

function masInfo3(){

descripcion3.classList.toggle("oculto")
if(descripcion3.classList.contains("oculto")){
    mas3.innerText = "Más..."
}else{mas3.innerText = "Menos..."}

};

tarjeta3.addEventListener("click",masInfo3)

//t4
let tarjeta4=document.getElementById("tarjeta4");
let descripcion4=document.getElementById("oculto4");
let mas4=document.getElementById("mas4")
function masInfo4(){

descripcion4.classList.toggle("oculto")
if(descripcion4.classList.contains("oculto")){
    mas4.innerText = "Más..."
}else{mas4.innerText = "Menos..."}

};

tarjeta4.addEventListener("click",masInfo4)


