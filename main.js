function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

//---------------------------------------------------------------

//COM WHILE
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

//COM FOR
for (contador=0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}
