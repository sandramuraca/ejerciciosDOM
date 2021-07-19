/*Necesitamos hacer un programa que al iniciarse pregunte mediante un prompt por una temperatura, y con ese dato modifique un h1 en el documento HTML, de forma tal que diga, por ejemplo, Temperatura actual: 20°y cambie el color siguiendo la siguiente tabla:
Temperatura	Color
Menor a 0°	Azul
Mayor o igual a 0° y menor a 15°	Celeste
Mayor o igual a 15° y menor a 25°	Verde
Mayor o igual a 25° y menor a 30°	Amarillo
Mayor o igual a 30° y menor a 35°	Naranja
Mayor a 35°	Rojo*/

const temperaturaUsuario = prompt("Ingrese la temperatura actual:");

const temperatura = document.querySelector("#temperatura");

temperatura.textContent = `Temperatura actual: ${temperaturaUsuario}°`;

if (temperaturaUsuario < 0){
    temperatura.style.color = "#0078d7";
} else if (temperaturaUsuario >= 0 && temperaturaUsuario < 15){
    temperatura.style.color = "#a0e6fe";
} else if  (temperaturaUsuario >= 15 && temperaturaUsuario < 25){
    temperatura.style.color = "#61c9a8";
} else if  (temperaturaUsuario >= 25 && temperaturaUsuario < 30){
    temperatura.style.color = "#ffff66";
} else if  (temperaturaUsuario >= 30 && temperaturaUsuario < 35){
    temperatura.style.color = "#fbc165";
} else if  (temperaturaUsuario >= 35){
    temperatura.style.color = "#e54d26";
} 
