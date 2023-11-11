// Exercicio aula 8
const nome = "Vinicius";
const sobrenome = "Oliveira";
const idade = 21;
const peso = 72;
const alturaEmM = 1.71;
let IMC;
let anoNascimento;

IMC = peso/(alturaEmM*alturaEmM)

anoNascimento = new Date();
anoNascimento = anoNascimento.getFullYear();
anoNascimento = anoNascimento-idade;

// template string

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${IMC}`) 
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)
