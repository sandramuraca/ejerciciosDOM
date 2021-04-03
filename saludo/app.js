/*Mediante un prompt ingresar un nombre y luego saludar en un H1 a ese nombre, usa tipografia y color distinto a lo que viene por defecto*/ 

const saludo = document.getElementById("saludo");
const nombre = prompt("ingrese su nombre"); 

saludo.textContent =`Hola ${nombre} como estas?`; //solo cambia texto

