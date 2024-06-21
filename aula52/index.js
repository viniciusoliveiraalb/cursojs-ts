// Escopo Léxico
const nome = 'Vini';

function falaNome(){
    
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Oliveira'
    falaNome();
}

usaFalaNome();