const pessoa = {
    nome: 'Vini',
    sobrenome: 'Oliveira',
    idade: 300,
    endereco:{
        rua: 'av brasil',
        numero:333
    }
};

// atribuição via desestruturação. 

const { nome, ...resto} = pessoa;
console.log(nome, resto);