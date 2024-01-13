// Atribuição via desestruturação
/*

const numeros = [10, 20, 30, 40, 50];
const [primeiro, segundo, ...resto] = numeros;
console.log(primeiro, segundo);
console.log(resto);

*/

// ...rest, ...spread
//                  0            1 
//                0  1  2     0  1  2    
const numeros = [[10,20,30], [80,90,13]];
const [,[, ,seis]] = numeros;

console.log(seis);

