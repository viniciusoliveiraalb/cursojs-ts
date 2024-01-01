// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0+ tresHoras - umDia); // 01-01-1970 Timestamp unix ou época unix
// const data = new Date(2019, 3); // A, m, d, h, M, s, ms


const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth()+1); // mes começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('MiliSegundos', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString());