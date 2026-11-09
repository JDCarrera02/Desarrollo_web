function nuevoNumero(){
    let numero = Math.floor(Math.random()*100)+1
    
    let li = document.createElement("li")

    li.textContent = numero

    document.getElementById("lista").appendChild(li)
}