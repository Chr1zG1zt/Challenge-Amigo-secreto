// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let amigoIn = document.getElementById("amigo").value;
    console.log(amigoIn);
    if (amigoIn !== "") {
        if (amigos.includes(amigoIn)) {
            alert("El amigo ya existe en la lista.");
            limpiarInput("amigo");
        } else {
            amigos.push(amigoIn);
            console.log(amigos);
            limpiarInput("amigo");
            actualizarLista();
        }
        
    } else {
        alert("Por favor, inserte un nombre.");
    }

}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = amigos[i];
        // li.textContent = amigos[i];
        lista.appendChild(li);
        console.log(li);
        console.log(amigos[i]);
        console.log(amigos);
    }
}   


function limpiarInput(id) {
    document.getElementById(id).value = "";
}

agregarAmigo();