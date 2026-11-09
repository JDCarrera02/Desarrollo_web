/*
 * Ejercicio 8 · Versión 1: document.ondblclick con rgb()
 * Al hacer doble clic en la pantalla del navegador, cambia el fondo a un color aleatorio.
 */

// Número aleatorio entre 0 y 255
function aleatorio255() {
    return Math.floor(Math.random() * 256);
}

document.ondblclick = function () {
    let r = aleatorio255();
    let g = aleatorio255();
    let b = aleatorio255();
    document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
};