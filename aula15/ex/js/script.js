const num = Number(prompt('Digite um numero<br>'))
const tituloh1 = document.getElementById('num');
const texto = document.getElementById('text');

tituloh1.innerHTML = num


twocasas = Number.parseFloat(num).toFixed(2)

raizQua = num ** 0.5;
document.body.innerHTML += `A raiz quadrada de ${num} é : ${raizQua}<br>`
document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(Number(num))}<br>`;
document.body.innerHTML += `É NaN: ${Number.isNaN(num)}<br>`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num)}<br>`;
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num)}<br>`;
document.body.innerHTML += `Com duas casas decimais: ${twocasas}<br>`; 