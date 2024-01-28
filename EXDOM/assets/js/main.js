const paragrafo = document.querySelector('.paragrafo');
const ps = paragrafo.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const bgcolorbody = estilosBody.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = bgcolorbody;
    p.style.color = '#FFF'
}