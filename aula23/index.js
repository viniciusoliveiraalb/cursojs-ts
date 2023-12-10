/*
&& -> false && true-> false "o valor mesmo"
|| ->  true ||| false -> vai retornar "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined
NaN

*/

// console.log('Vini' && 'Oliveira') // retorna o ultimo valor se tudo for true, se for false retorna o valor diferente de true (false)

// function falaOi(){
//     return 'Oi';
// }

// const vaiExecutar = false;

// console.log(vaiExecutar || falaOi());

console.log(0 || false || null || 'Vini' || true)