/* 
Realiza un formulario que pida una dirección de email y la valide antes de enviarla:

Ejer 2-a) Debe validar si el email sigue el formato texto@servidor.loquesea

Ejer 2-b) Además de validar el formato anterior, debe comprobar que servidor.loquesea
esté como servidor admitido en un array de servidores llamado “listaServidores”.
Dicho array debe ser definido a mano en el código.

Ejemplo
listaServidores=[“terra.es”,”google.com”,”marca.es”,”yahoo.es”];


const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
return regex.test(email.trim());

*/

const regex = /^[a-zAZ0-9/_]+@[a-zA-Z0-9/_]+\.[a-zA-Z]{2,}$/

let campoEntrada = document.getElementById("campo_email")
let html = ""

// Para validar el servidor
const listaServidores = ["terra.es","google.com", "marca.es", "yahoo.es"]

function validarEmail(){

    html += "<p>"

    // Obtener la entrada del usuario
    const entradaUsuario = String(campoEntrada.value).trim()

    // Validar formato
    if (!regex.test(entradaUsuario)) {
        
        alert('NO es el formato correcto')
        return
    }

    html += "Formato correcto"

    // Validar que se encuentra en un servidor valido

    // Obtener servidor (de la entrada del usuario)
    const servidorUsuario = entradaUsuario.substring(entradaUsuario.search('@'), entradaUsuario.length)

    // Comparar si el servidor del usuario concuerda con alguno de los que son validos (de la lista de servidores)
    const esValido = listaServidores.includes(servidorUsuario.substring(1))

    if (!esValido) {
        
        alert(`El servidor: ${servidorUsuario} no es válido, debe estar entre estos servidores... ${listaServidores.toString()}`)
        return
    }

    html += "</p>"

    // En el caso que sea valido, se le dice al usuario
    // document.body.innerHTML(html)
}


