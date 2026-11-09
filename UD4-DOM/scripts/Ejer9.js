/*
 * Ejercicio 9 · Versión 1: Atributos ondragstart / ondragover / ondrop
 * Una imagen de una bola de papel y una papelera vacía. Al arrastrar la bola a la papelera, la imagen cambia a una papelera llena.
 */

// 1. Empieza el arrastre: guardamos qué se está arrastrando (su id)
function empezarArrastre(evento) {
    evento.dataTransfer.setData("text", evento.target.id);
}

// 2. Mientras pasa por encima de la papelera. Por defecto NO se puede soltar nada
//    en un elemento: preventDefault() quita ese comportamiento y permite el drop
function permitirSoltar(evento) {
    evento.preventDefault();
}

// 3. Se suelta encima de la papelera
function soltar(evento) {
    evento.preventDefault();
    document.getElementById("papelera").src = "papelera_llena.svg";   // cambiamos la imagen
    document.getElementById("bola").style.visibility = "hidden";       // la bola "entra"
}