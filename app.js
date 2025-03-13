let amigos = [];

// Agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    const regex = /\d/;
    if (regex.test(nombreAmigo)) {
        alert("El nombre no puede contener números.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    mostrarListaAmigos();
}


// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agregue al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

// Reiniciar el sorteo
function reiniciarSorteo() {
    amigos = [];
    mostrarListaAmigos();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
    document.getElementById('amigo').focus();
}
