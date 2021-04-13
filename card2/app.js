
const titulo = prompt(`Que titulo quieres mostrar en tu tarjeta?`);
const animalImgUrl = prompt (`Por favor ingresa la url de una imagen de tu animal favorito`);
const articuloUrl = prompt (`Por favor ingresa la url de un articulo que sea de tu interés`);

const tituloH1 = document.getElementById("titulo");
const imagen = document.getElementById("imagen");
const articulo = document.getElementById("articulo");
const card = document.getElementById("card");

tituloH1.innerHTML = titulo;
imagen.setAttribute(`src`, animalImgUrl);
articulo.setAttribute (`href`, "https://" + articuloUrl); // http:// se agrega por si el usuario no lo escribe, si lo escribe va adar error


// Para trabajar desde el DOM con atributos, getAttribute, setAttribute y removeAttribute
// getAttribute: elemento.getAttribute("atributo") / h1.getAttribute("id") / true o false
// setAtribute: elemento.setAttribute("atributo", "valor") / h1.setAttribute("id", "Nuevoid")
// removeAttribute: elemento.removeAttribute("atributo") / h1.removeAttribute("id")

//Agregar estilos:
card.classList.add("fondoLila");
tituloH1.classList.add("textoVioleta");
tituloH1.classList.add("tamanioTitulo");
articulo.classList.add("textoVioleta");
imagen.classList.add("tamanio");

//otra forma:
//tituloH1.style.color = "red";