let numeroSecreto = 0;
let contador = 0;
let listaNumerosSorteados = [];
let numeroMaximo = prompt('Seleccione el rango a adivinar del 1 al ');

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${contador} ${(contador === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El Usuario no acerto
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }

        contador++;

        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    return document.querySelector('#valorUsuario').value = '';
}

function GenerarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;


    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{

        //Si el numero generado esta includio en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return GenerarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

}

function CondicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al ' + numeroMaximo);
    numeroSecreto = GenerarNumeroSecreto();
    contador = 1;
}

function reiniciarJuego(){
    //Limpia la caja
    limpiarCaja();
    //Indicar mensaje de inicio
    //Generar nuevo numero aleatorio
    //Inicializar el numero de intentos
    CondicionesIniciales();
    //Desabilitar el boton "Nuevo Juego"
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

CondicionesIniciales();