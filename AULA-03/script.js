//WHILE

//EVENTO SENDO EXECUTADO QUANDO A PÁGINA É ATUALIZADA
//AO SER ATUALIZADA OU CARREGADA, A FUNÇÃO É CHAMADA
/*document.addEventListener("DOMContentLoaded", function(){
   
    //CRIANDO AS VARIÁVEIS RESULTADO E CONTADOR
    var resultado = document.getElementById('resultado');
    var contador = 1;

    while (contador <= 5){
        //CRIANDO O ELEMENTO LIST ITEM NA PÁGINA 
        var item = document.createElement('li');
        
        //ADICIONANDO O VALOR NUMÉRICO DO CONTADO À VARIÁVEL ITEM
        item.textContent = contador;
        
        //ATRIBUINDO O VALOR DA VARIÁVEL ITEM AO ELEMENTO HTML POR MEIO DE SEU ID
        resultado.appendChild(item);

        contador++;
    }

})*/

//DO-WHILE

function verificarNumero() {
    var numero = parseInt(document.getElementById('numero').value);
    var mensagem = document.getElementById('mensagem');

    do {
        numero = parseInt(prompt('Insira um número maior que 5'));
    } while (numero <= 5)

    mensagem.textContent = "O número inserido é: " + numero;

}

//FOR

document.addEventListener('DOMContentLoaded', function () {

    var resultado = document.getElementById('resultadoFor');

    for (var i = 0; i < 100; i++) {
        var item = document.createElement('li');
        item.textContent = i;

        resultado.appendChild(item);
    }

})


//ALTERANDO A COR DE FUNDO - BACKGROUND

function alterarCorFundo() {

    var container = document.getElementById('container');

    container.style.backgroundColor = "red";

}

//OCULTANDO ELEMENTO HTML

function ocultarElemento() {

    var mensagem = document.getElementById('mensagem');

    if (mensagem.style.display == 'none') {
        mensagem.style.display = 'block';
    } else {
        mensagem.style.display = 'none';
    }

}

//INSERINDO RESULTADO NO HTML

function somar(){
    
    var val1 = parseInt(document.getElementById('val1').value);
    var val2 = parseInt(document.getElementById('val2').value);

    var resultado = val1 + val2;

    document.getElementById('resultado').innerText = 'O resultado é: ' + resultado;

}