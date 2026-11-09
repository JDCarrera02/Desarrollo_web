// Un doble clic provoca: click, click y dblclick. Si ocultáramos en el primer click,
// el párrafo desaparecería y el dblclick nunca llegaría a él.
// Solución: esperar un poco antes de ocultar; si llega el dblclick, cancelamos la espera.
let temporizador = null;

// "parrafo" es el this que le pasamos desde el HTML: onclick="ocultar(this)"
function ocultar(parrafo) {
    clearTimeout(temporizador);                   // cancela un ocultado pendiente
    temporizador = setTimeout(function () {
        parrafo.style.display = "none";           // oculto: sigue en el DOM
    }, 250);
}

function eliminar(parrafo) {
    clearTimeout(temporizador);                   // era un doble clic: no ocultar
    parrafo.remove();                             // eliminado: ya no existe en el DOM
}

function reaparecer() {
    let parrafos = document.getElementById("parrafos").getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.display = "";           // "" = vuelve a su valor normal
    }
    // Los eliminados no aparecen porque ya no están en getElementsByTagName
}