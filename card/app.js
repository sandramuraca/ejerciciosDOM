/*card
Hacer un programa que al iniciarse pregunte mediante prompts por

un título
una url de una imagen
una url a un artículo
Utilizar esos datos para completar en el html una card que tenga

una imagen, con la url de la imagen ingresada
un título, con el texto del título ingresado
un link que diga Leer más, con la url al artículo ingresado
Dar algunos estilos mínimos a la card:

centrarla con respecto a la pantalla
agregarle un borde
agregarle un sombreado
cambiarle la tipografía
cambiarle los tamaños de fuente
cambiarle los colores por defecto

PASOS:
1. MAQUETADO DE LA CARD - h1 / img / href
2. stilos en css
3. guardar los elemtos del html en el js en variables
4. en JS los promp con los datos
5. enlazar los elemtos del html con js
*/
"use strict";

const titulo = document.querySelector(".titulo");
const imagen = document.querySelector(".imagen");
const link = document.querySelector(".link");

const tituloUsuario = prompt("ingrese el titulo");
const imagenUsuario = prompt("ingrese el link a la imagen");
const texto = prompt("ingrese el link al texto");

titulo.textContent = tituloUsuario;
imagen.src = imagenUsuario;
link.href = texto;

