/*

Realiza un formulario donde se pueda introducir y enviar un DNI con letra. El formulario
deberá validar si la letra es correcta al:
Ejer 1-a) Perder el foco del campo de texto donde se introduce el DNI.
Ejer 1-b) Enviar el formulario, cancelando el envío si el formato no es correcto.

*/

// Obtener el el campo donde se escribió el DNI
const textoUsuario = document.getElementById("campo_dni")

// Array que guarda las letras
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']


function validarDni(){

    const entrada = (String(textoUsuario.value) == null ? "": String(textoUsuario.value))

    // Comprobar DNI

    // Tamaño
    if (entrada.length != 9) {
        alert('La longitud del dni debe ser de 9 caracteres')
        return
    }

    // Comprobar si la letra es valida

    // Obtener entrada sin la letra
    let sinLetra = entrada.substring(entrada.length-1,0).toUpperCase()

    // Hacer el calculo
    const calculo = Number(sinLetra)%23

    // Obtener la letra de acuerdo al calculo
    const letraValida = letras[calculo]

    console.log(letraValida)

    // Obtener la letra que ha escrito el usuario
    const valido = entrada[8] == letraValida

    // Comprobar si la letra ingresada por el usuario es valida
    if (!valido) {

        // Si no lo es, cancelar el envío
        console.log('Letra incorrecta')
        return
    }

    // Si es válida, enviar la información
    console.log('Letra correcta')
}