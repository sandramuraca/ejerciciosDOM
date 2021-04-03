/*Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.*/
`use strict`;

const colorFondo = document.querySelector("body");

const color1 = prompt("Ingrese el valor del primer parametro del color");
const color2 = prompt("Ingrese el valor del segundo parametro del color");
const color3 = prompt("Ingrese el valor del tercer parametro del color");


//forma 1 - style

colorFondo.style = `background-color: rgb(${color1} ${color2} ${color3})`;
/*
// forma 2 - innerHTML

colorFondo.innerHTML = `<style> body{background-color: rgb(${color1}, ${color2}, ${color3})};</style>`;

//forma3

const estilos = `background-color: rgb(${color1} ${color2} ${color3})`;
colorFondo.style = estilos;*/
