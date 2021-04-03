/**animales
En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.

1. html con 3 imagenes de animales
2. llamar a las 3 imagenes con constantes
3. 1 promp preguntanto que animal quiere ver
4. hacer condicional texto/imagen animal*/

const imagenPerro = document.querySelector(".perro");
const imagenGato = document.querySelector(".gato");
const imagenLoro = document.querySelector(".loro");

const seleccion = prompt("Elegi entre: 1)perro 2)gato 3)loro");


if (seleccion == 1) {
    imagenPerro.src =
    "perro.jpg";
} else if (seleccion == 2) {
    imagenGato.src =
    "gatito.jpg";
} else if (seleccion == 3) {
    imagenLoro.src =
    "loro.jpg";
} else {
    alert("Opción incorrecta");
};
