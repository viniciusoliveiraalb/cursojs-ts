function relogio(){
const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos)
    }, 1000);
}
function getTimeFromSeconds(seconds){
    const hora = new Date(seconds * 1000);
    return hora.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('zerar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
    if(el.classList.contains('pausar')) {
        relogio.classList.add('pausado')
        clearInterval(timer);
    }
    if(el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio();
    }
});
}

relogio();

// OUTRA MANEIRA DE FAZER, MAIS CUSTOSA PARA O PROCESSAMENTO E NAO CONTEM BOAS PRATICAS.

// iniciar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado')
//     clearInterval(timer);
//     iniciaRelogio();
// });
// pausar.addEventListener('click', function(event){
//     relogio.classList.add('pausado')
//     clearInterval(timer);
// });
// zerar.addEventListener('click', function(event){
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
// });

