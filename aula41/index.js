// Escreva uma função que recebe 2 numeros e retorne o maior deles.

//------------------COMO EU FIZ------------------------------------


// function receba(){
//     let x = Math.floor(Math.random() * 30);
//     let y = Math.floor(Math.random() * 30);

    
//     console.log(`Os numeros escolhidos foram ${x} e ${y}  `);

//     if( x > y){
//         console.log('O maior é', x)
//     }else{
//        console.log('o maior é', y)
//     }

// }

// receba();

//----------CORREÇÃO-----------------------------------

const max2 = (x, y) => x > y ? x : y; 
console.log(max2(10, 20))