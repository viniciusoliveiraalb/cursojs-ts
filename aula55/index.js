// IIFE - Immediately Invoked Function Expression
(function(idade, peso, altura) {
    const sobrenome = 'Oliveira'
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Vinicius'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.90);

const nome = 'Qualquer coisa';