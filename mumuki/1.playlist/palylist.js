/*Necesitamos crear una página para enlistar canciones . La misma debe tener un título h1 que diga Mis canciones favoritas y debajo una lista desordenada que inicialmente estará vacía. Esta lista, se podrá completar con cinco canciones.*/

const cancionUsuario1 = prompt("Ingrese la primer cancion");
const cancion1 = document.querySelector("#cancion1");
cancion1.textContent = cancionUsuario1;

const cancionUsuario2 = prompt("Ingrese la segunda cancion");
const cancion2 = document.querySelector("#cancion2");
cancion2.textContent = cancionUsuario2;

const cancionUsuario3 = prompt("Ingrese la tercer cancion");
const cancion3 = document.querySelector("#cancion3");
cancion3.textContent = cancionUsuario3;

const cancionUsuario4 = prompt("Ingrese la cuarta cancion");
const cancion4 = document.querySelector("#cancion4");
cancion4.textContent = cancionUsuario4;

const cancionUsuario5 = prompt("Ingrese la quinta cancion");
const cancion5 = document.querySelector("#cancion5");
cancion5.textContent = cancionUsuario5;