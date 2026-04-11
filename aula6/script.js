const botao = document.querySelector('button');

botao.onclick = function(){
    console.log('Botao clicado');
};

botao.addEventListener('click', () => {
    console.log('Clicou')
});

function saudacao(){
    console.log('Olá, mundo')
}

saudacao();

//declaração
function soma(a, b){
    return a + b;
}

//expressão
const multiplicar = function(a, b){
    return a * b;
}

//arrow
const dobrar = (N) => N * 2;

saudacao();