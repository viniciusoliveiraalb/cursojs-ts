let varA = 'A'; // B
let varB = 'B'; // C 
let varC = 'C'; // A

/*const A = varA
varA = varB
varB = varC
varC = A
*/

// ou se nao for permitido criar uma nova variavel fazer o seguinte:

[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC)