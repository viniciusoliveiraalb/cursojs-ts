// Escreva uma função chamada ePaisagem que 
// receba 2 argumentos, largura e altura
// de um imagem (number).
// retorne true se a imagem estiver no modo paisagem


// --------COMO EU FIZ------------


// function ePaisagem(alt, lar){

//     if(alt === lar){
//        console.log('É um quadrado') 
//     }else if(alt > lar){
//        console.log('É retrato')
//     }else if(lar > alt){
//         console.log('É paisagem')
//     }

// }

// --------------CORREÇÃO-------------

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(400, 500));
