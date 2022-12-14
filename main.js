function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encotrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//*********** COM FOR ***********
for (contador=0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

//---------------------------------------------------------------
//********** COM WHILE ***********

//let contador = 0;

// while (contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];

//     const instrumento = tecla.classList[1];

//     const idAudio = `#som_${instrumento}`;
    
//     tecla.onclick = function () {
//         tocaSom(idAudio);
//     }
    
//     contador += 1;

//     console.log(contador);

// }

//---------------------------------------------------------------