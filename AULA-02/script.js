//Variável global - Capaz de ser acessada em qualquer parte do código
var nome = "Luís Fernando";
console.log(nome);

//Constante - O seu valor nunca se altera
const desconto = 10;
console.log(desconto);

//Variável não pode ser acessada fora do seu escopo
//É possível reatribuir um valor, desde que seja no mesmo escopo
function mensagem(){
    let sobrenome = "varela";
    console.log(sobrenome);
}

mensagem();

var a = 10;
var b = '10';

//Verifica se os valores são iguais
var res1 = a == b;
//Verifica se os valores e o tipo de dado são iguais
var res2 = a === b;

console.log(res1);
console.log(res2);

function exibirMensagem(){
    var nome = document.getElementById("nameInput").value;
    alert("Nome informado: " + nome);
}


