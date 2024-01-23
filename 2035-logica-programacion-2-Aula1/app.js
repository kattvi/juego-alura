let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste al numero');
    }
    return;
}
  
function generaNumeroSecreto() {
    return Math.floor (Math.random ()*10)+1;


}

asignarTextoElemento ('h1','juego del numero secreto!');
asignarTextoElemento ('p',"indica un numero del 1 al 10");