// 1. CREAR LA TABLA (se ejecuta al cargar)
let tabla = document.createElement("table");
let numero = 1;

for (let i = 0; i < 100; i++) {                // 100 filas
    let fila = document.createElement("tr");
    for (let j = 0; j < 100; j++) {            // 100 celdas por fila
        let celda = document.createElement("td");
        celda.textContent = numero;
        numero++;
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
}
document.getElementById("contenedor").appendChild(tabla);

// 2. ¿Es casi primo? → exactamente UN divisor entre 2 y n-1
function esCasiPrimo(n) {
    let divisores = 0;
    for (let d = 2; d < n; d++) {
        if (n % d == 0) {
            divisores++;
            if (divisores > 1) return false;   // con 2 ya no lo es: salimos antes (más rápido)
        }
    }
    return divisores == 1;
}

// 3. AL PULSAR EL BOTÓN: recorrer todas las celdas
function marcarCasiPrimos() {
    let celdas = document.getElementsByTagName("td");
    for (let i = 0; i < celdas.length; i++) {
        let n = parseInt(celdas[i].textContent);
        if (esCasiPrimo(n)) {
            celdas[i].style.backgroundColor = "yellow";
        }
    }
}
