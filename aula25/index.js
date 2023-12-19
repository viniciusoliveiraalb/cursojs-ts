const numero = 10;

// if (numero >= 0 && numero <= 5) {
//     console.log('Sim, o numero é maior ou igual a zero')
// } else {
//     console.log('O numero nao esta entre 0 e 5.');
// }

if (numero >= 0 && numero <= 5) {
    console.log('o numero esta entre 0 e 5.');
} else if(numero >= 6 && numero <= 8){
    console.log('O numero está entre 6 e 8.');
}else if(1 === 1){
    console.log('LITERAL'); // retorna o primeiro valor verdadeiro que encontra.
}else if(numero >= 9 && numero <= 11){
    console.log('O Numero esta entre 9 e 11.');
}else{
    console.log('o numero nao esta entre 0 e 11.');
}
