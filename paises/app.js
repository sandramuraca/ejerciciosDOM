/**
 paises
En un documento html crear una lista desordenada con distintos paises de cada continente (entre 2 y 4 por continente). Hacer un programa que al iniciarse pregunte mediante un prompt por un continente y destaque en rojo y en negrita aquellos paises de dicho continente.


 */

const argentina = document.querySelector("#argentina");
const bolivia = document.querySelector("#bolivia");
const sudafrica = document.querySelector("#sudafrica");
const etiopia = document.querySelector("#etiopia");
const italia = document.querySelector("#italia");
const china = document.querySelector("#china");
const india = document.querySelector("#india");
const grecia = document.querySelector("#grecia");
const francia = document.querySelector("#francia");
const australia = document.querySelector("#sudafrica");
const nuevaZelanda = document.querySelector("#nuevaZelanda");

const seleccion = prompt("Ingrese 1 continente: 1 America, 2 Europa, 3 Oceania, 4 Africa, 5 Asia");

if (seleccion == 1){
    argentina.classList.add("negrita");
    bolivia.classList.add("negrita");
} else if
(seleccion == 2) {
    italia.classList.add("negrita");
    grecia.classList.add("negrita");
    francia.classList.add("negrita");
} else if
(seleccion == 3){
    australia.classList.add("negrita");
    nuevaZelanda.classList.add("negrita");
} else if
(seleccion == 4){
    sudafrica.classList.add("negrita");
    etiopia.classList.add("negrita");
} else if
(seleccion == 5){
    china.classList.add("negrita");
    india.classList.add("negrita");
} else {
    alert ("opcion invalida")
}

