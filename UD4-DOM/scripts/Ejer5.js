/*
 * Ejercicio 5 · Versión 1: Atributo onmousemove en el body pasando event
 * Usando eventos y el objeto event, muestra en todo momento la posición del ratón modificando un elemento (por ejemplo un <p>).
 */

// En el HTML: <body onmousemove="mostrarPosicion(event)">
// "event" es el objeto con la información del evento (posición, tecla, elemento...)
function mostrarPosicion(evento) {
    document.getElementById("posicion").textContent =
        "X: " + evento.clientX + "   Y: " + evento.clientY;
}