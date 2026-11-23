/* 
Realiza un formulario que pida una dirección de email y la valide antes de enviarla:

Ejer 2-a) Debe validar si el email sigue el formato texto@servidor.loquesea

Ejer 2-b) Además de validar el formato anterior, debe comprobar que servidor.loquesea
esté como servidor admitido en un array de servidores llamado “listaServidores”.
Dicho array debe ser definido a mano en el código.

Ejemplo
listaServidores=[“terra.es”,”google.com”,”marca.es”,”yahoo.es”];

*/

var regex = new RegExp("^[a-zAZ0-9/_]+@[a-zA-Z0-9/_]\.[a-zA-Z]{2,}$")

let campoEntrada = document.getElementById("campo_email")
p.className = "parrafo_dialogo"

let p = document.createElement("p")

function validarEmail(){

    // Obtener la entrada del usuario
    const entradaUsuario = String(campoEntrada.value).trim()

    console.log(entradaUsuario)

    // Validar formato
    if (!entradaUsuario.match(regex)) {
        
        console.log('nada')
        
    }
}


