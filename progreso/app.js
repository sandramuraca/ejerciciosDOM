/*progreso
Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)
1. pedir al usuario que ingrese el valor
2.guardar la barra de progreso del dom
3. modificar con style el width*/

const porcentajeDeProgreso = Number(prompt("Ingrese el porcentaje de progreso"));
const barra = document.querySelector(".progreso");

/*barra.style= `width: calc(100% * ${porcentajeDeProgreso/100})`;*/

barra.style= `width:  ${porcentajeDeProgreso}%`;
