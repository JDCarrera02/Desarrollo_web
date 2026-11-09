/*
 * Ejercicio 7 · Versión 1: document.onkeydown y un bucle
 * Cuando se presione una tecla, calcula cuántos DNIs de 4 cifras (0001 a 9999) tienen esa letra y muéstralos con sus letras en un elemento (por ejemplo un <p>).
 */

const LETRAS = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

// "evento" lo pasa el navegador automáticamente
document.onkeydown = function (evento) {
    let letra = evento.key.toUpperCase();      // "a" → "A"
    let encontrados = "";
    let total = 0;

    for (let i = 1; i <= 9999; i++) {
        if (LETRAS[i % 23] == letra) {
            encontrados += String(i).padStart(4, "0") + letra + "  ";   // 7 → "0007"
            total++;
        }
    }

    document.getElementById("resultado").textContent =
        "Letra " + letra + ": " + total + " DNIs → " + encontrados;
};