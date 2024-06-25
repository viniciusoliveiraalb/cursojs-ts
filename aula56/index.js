// factory function (função fabrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p){
    return {
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome} `;
        },


        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'falando nada'){
            return `${this.nome} está ${assunto}.`;
        },


        altura : a,
        peso: p,
        // Getter = 
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('vINICIUS','Oliveira', 1.9, 80);
const p2 = criaPessoa('pessoa1','Oliveira', 1.2, 100);
const p3 = criaPessoa('pessoa2','Oliveira', 1.4, 90);

console.log(p1.imc);
console.log(p3.imc);
console.log(p2.imc);
