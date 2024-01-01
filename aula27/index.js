// (condição)? 'valor para true':'valor para false';
const pontuacaoUser = 999
const nivelUser = pontuacaoUser >= 1000 ? 'Usuario VIP' : 'Usuario Normal';


const corUsuario = null;
const corPadrao = corUsuario || 'Roxo';


console.log(nivelUser, corPadrao);




// if (pontuacaoUser >= 1000){
//     console.log ('user vip')
// }else{
//     console.log('User normal');
// }