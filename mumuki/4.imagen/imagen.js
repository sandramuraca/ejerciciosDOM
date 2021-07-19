/*Queremos crear una página que nos permita modificar el tamaño de una imagen que fue agregada previamente en el documento HTML. Para ello se debe poder ingresar mediante un prompt alguna de las opciones posibles (chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen . Por ejemplo:

Opción elegida	Ancho de imagen
chica	200px
mediana	500px
grande	800px*/

const tamanio = prompt("Ingrese: chica, mediana, grande");

const imagen = document.querySelector("#imagen");

if (tamanio === "chica"){
    imagen.style.width= "20%"
} else if (tamanio === "mediana"){
    imagen.style.width= "50%"
} else if (tamanio === "grande"){
    imagen.style.width= "100%"
}
    
