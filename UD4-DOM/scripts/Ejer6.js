/*
 * Ejercicio 6 · Versión 1: Variable global y comprobación para no duplicar
 * Dos botones: "Comenzar Saludos" lanza un setInterval que cada 5 segundos muestra un alert con "Hola"; "Parar Saludos" detiene la secuencia.
 */

let intervalo = null;          // aquí guardamos el identificador que devuelve setInterval

function saludar() {
    alert("Hola");
}

function comenzar() {
    if (intervalo !== null) return;            // ya está en marcha: no lanzamos otro
    // saludar SIN paréntesis: le damos la función para que la llame él cada 5 s.
    // Con paréntesis se ejecutaría una vez ahora mismo.
    intervalo = setInterval(saludar, 5000);
}

function parar() {
    clearInterval(intervalo);                  // detiene el intervalo con ese identificador
    intervalo = null;
}