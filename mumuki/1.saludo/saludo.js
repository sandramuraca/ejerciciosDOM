/*Para hacer interactivas nuestras páginas, queremos incorporar un saludo personalizado , para ello vamos a crear un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre dentro de un h1 el siguiente saludo Hola ${nombre}. Te damos la bienvenida.

 Consideraciones:

el título h1 debe tener un tamaño de 22px y la tipografía de Google Fonts Roboto.*/

const nombre = prompt("Ingrese su nombre");

const titulo = document. querySelector("#titulo");
titulo.textContent = `Hola ${nombre}. Te damos la bienvenida.`;