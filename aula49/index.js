// declaração (function hosting)

falaOi(); //(hoisting) (chamando função antes de declarar)

function falaOi(){        // quando declaramos função dessa maneira = existe hoisting
     console.log('Oie');
}

// first-class objetcts (objetos de primeira classe)
// function expression
const souUmDado = function(){
     console.log('Sou um dado');
};

souUmDado();

//arrow function
const funcaoArrow = () => {
     console.log('Sou um arrow function');
}; 
funcaoArrow();