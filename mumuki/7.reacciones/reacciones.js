/*Queremos hacer un programa para una red social que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes. Para ello previamente en un documento HTML haremos un post que contenga:

un h3 con la usuaria;
un p con un lorem ipsum;
3 spans de reacciones con un ícono más un número con la cantidad.
Los emojis que utilizaremos son:
👍 (me gusta);
❤️ (me encanta);
😮 (me asombra).
 Consideraciones:

la tipografía debe ser Poppins de Google Fonts;
los spans deben estar en línea, separados con márgenes de 15px Y tener color de fondo gris suave.*/

const reaccion1 = prompt("Ingrese cantidad de: Me gusta");
const reaccion2 = prompt("Ingrese cantidad de: Me encanta");
const reaccion3 = prompt("Ingrese cantidad de: Me asombra");

const meGusta = document.querySelector("#me-gusta");
const meEncanta = document.querySelector("#me-encanta");
const meAsombra = document.querySelector("#me-asombra");

meGusta.textContent = `${reaccion1} 👍 me gusta`;
meEncanta.textContent = `${reaccion2} ❤️ me encanta`;
meAsombra.textContent = `${reaccion3} 😲 me asombra`;