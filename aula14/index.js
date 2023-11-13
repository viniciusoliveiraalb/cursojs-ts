let num1 = 0.7; // number 
let num2 = 0.1; // number

num1 = Number(num1.toFixed(2))

// num1 = ((num1 * 100) + (num2 * 100)) / 100;
// num1 = ((num1 * 100) + (num2 * 100)) / 100;
// num1 = ((num1 * 100) + (num2 * 100)) / 100;

//num1 = parseFloat(num1.toFixed(2)); // convertendo para numero decimal e com 2 casa decimais. posso usar parseFloat ou Number!

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1))


// console.log(num1.toString()+num2); // converter para string

// num1 = num1.toString(); - para mudar o valor da variavel. 

// console.log(num1.toString(2)); - para ver a representação binaria de um number

// console.log(num1.toFixed(2)) - para definir a quantidade de casas decimais de um number.

// console.log(Number.isInteger(num1)); - retorna se o numero é um inteiro (true or false)

// console.log(Number.isNaN(temp)); - verifica se o resultado é NaN "Not a Number" exemplo: let temp = num1 + 'ola';

// let temp = num1 * '5';

// console.log(temp)