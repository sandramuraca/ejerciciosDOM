/*Vamos a crear una página para jugar a resolver una pregunta . Se espera que la misma:

1) Tenga dos span. El primero con una pregunta, o adivinanza. El segundo inicialmente estará vacío. 
Que tenga tres botones con posibles respuestas. 
2) Al clickear la respuesta correcta, el botón debe ponerse de color verde 
3) Una vez logrado 3, que ademas el texto del segundo span se actualice mostrando ¡Respuesta correcta!; 
4) Una vez logrado el punto 3, si se clickea una respuesta incorrecta, se debe mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo. 
5) Una vez logrado el punto 4, el texto del segundo span debe actualizarse mostrando ¡Respuesta equivocada!.*/

const preguntaAdivinanza = document.querySelector("#pregunta-adivinanza")
const textoRespuesta = document.querySelector("#texto-respuesta")
const respuesta1 = document.querySelector("#respuesta1")
const respuesta2 = document.querySelector("#respuesta2")
const respuesta3 = document.querySelector("#respuesta3")


respuesta2.onclick = () =>{
    respuesta2.classList.add("verde")
    textoRespuesta.textContent = "¡Respuesta correcta!"
}

respuesta1.onclick = () =>{
    respuesta2.classList.add("verde")
    respuesta1.classList.add("rojo")
    respuesta3.classList.add("rojo")
    textoRespuesta.textContent = "¡Respuesta equivocada!"
}
respuesta3.onclick = () =>{
    respuesta2.classList.add("verde")
    respuesta1.classList.add("rojo")
    respuesta3.classList.add("rojo")
    textoRespuesta.textContent = "¡Respuesta equivocada!"
}