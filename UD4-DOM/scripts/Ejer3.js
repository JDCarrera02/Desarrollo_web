// 1. Crear las 100 casillas
let contenedor = document.getElementById("casillas");

for (let i = 0; i < 100; i++) {
    let numero = Math.floor(Math.random() * 1000);

    let etiqueta = document.createElement("label");
    let casilla = document.createElement("input");
    casilla.type = "checkbox";
    casilla.value = numero;

    etiqueta.appendChild(casilla);                                   // <label><input></label>
    etiqueta.appendChild(document.createTextNode(" " + numero));     // <label><input> 345</label>
    contenedor.appendChild(etiqueta);
}

// 2. Botones
function marcarTodos() {
    let casillas = contenedor.getElementsByTagName("input");
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].checked = true;
    }
}

function desmarcarTodos() {
    let casillas = contenedor.getElementsByTagName("input");
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].checked = false;
    }
}