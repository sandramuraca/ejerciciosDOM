/*Ale también nos pidió un programa para trabajar con los colores en sistema rgb, para ello vamos a crear una página que al iniciar pida mediante tres prompts los valores correspondientes al sistema rgb, y una vez ingresados ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.*/

const rojo = prompt("ingrese el codigo correspondiente al rojo del 0 al 255:");
const verde = prompt("ingrese el codigo correspondiente al verde del 0 al 255:");
const azul = prompt("ingrese el codigo correspondiente al azul del 0 al 255:");

const body = document.querySelector("body");

body.style.backgroundColor = `(${rojo},  ${verde},  ${azul})`;
