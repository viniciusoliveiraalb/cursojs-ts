// para usar o mesmo "tipo de aspas" ficar na declaração podemos
// escrever da seguinte maneira

let umaString = "Um texto";
console.log(umaString.concat( ' ','em um lindo dia')) // [] retorna o elemento de uma string
console.log(umaString + '','em um lindo dia') 
console.log(`${umaString} em um lindo dia`)

console.log(umaString.indexOf('t'))