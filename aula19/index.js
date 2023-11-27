// Tipos de dados primitivos e valores por referencia

/*

Primitivos (imutáveis) - String, Number, boolean, undefined, null (bigint, symbol) Nao podemos alterar o valor
Referencia - (mutável) - array, object, function - Passados por referencia.

*/

//let nome = 'Vinicius';
//nome[0] = 'T';
//console.log(nome)

/*

let a = 'A';
let b = a; //Cópia
console.log(a, b);

a = 'Outra coisa';

console.log(a, b);

*/

let a =[1, 2, 3];
let b = a;
console.log(a, b)

a.push(4);
console.log(a, b)

b.pop()
console.log(a, b)

a.push('Vinicius')
console.log(a, b)

