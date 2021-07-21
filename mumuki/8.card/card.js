/*Necesitamos hacer un programa para completar los datos de una card, para ello al iniciar el mismo debe pedir mediante prompts por:

un título h1;
una url de una imagen;
una url a un artículo.
Previamente en un documento HTML haremos una card que tenga:

una clase card;
una imagen, con la url de la imagen ingresada;
un título, con el texto del título ingresado;
un link que diga Leer más, con la url al artículo ingresado.*/

const tituloUsuario = prompt("Ingresar el totulo del articulo")
const imagenUsuario  = prompt("Ingresar una url para la imagen del articulo")
const textoUsuario  = prompt("Ingresar una url para el texto del articulo")

const titulo = document.querySelector("#titulo")
const imagen = document.querySelector("#imagen")
const articulo = document.querySelector("#articulo")

titulo.textContent = tituloUsuario
imagen.src = imagenUsuario
articulo.href = textoUsuario