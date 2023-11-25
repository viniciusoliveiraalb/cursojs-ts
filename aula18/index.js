// Objetos
/*

function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Vinicius', 'Oliveira', 20)

*/

const pessoa1 = {
    nome: 'Vinicius',
    sobrenome: 'Oliveira',
    idade: 20,
    
    fala(){
        console.log(`A minha idade atual é ${this.idade} anos... `)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
