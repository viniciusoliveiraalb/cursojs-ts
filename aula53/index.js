function retornaFuncao(nome){
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao('Vini');
const funcao2 = retornaFuncao('Oliver');
console.dir(funcao());
console.dir(funcao2());