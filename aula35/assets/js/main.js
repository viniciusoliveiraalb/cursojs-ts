const elementos = [
    {tag: 'p', texto: 'Hoje escrevo page'},
    {tag: 'div', texto: 'escrevendo...'},
    {tag: 'footer', texto: 'Rodapé'},
    {tag: 'section', texto: 'Seção'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
   let { tag, texto } = elementos[i];
   let tagCriada = document.createElement(tag);
   tagCriada.innerHTML = texto;
   div.appendChild(tagCriada);
}

container.appendChild(div);