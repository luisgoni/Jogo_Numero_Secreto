//Conseguindo altrar algo no htm usando java script.
//Selecionando a teg h1 no index html e..
// let titulo = document.querySelector('h1');
// // colocando um texto no local indicado(h1)
// titulo.innerHTML = 'Jogo do número secreto !!!';

// //Selecionando o paragrafro da pagina html e alterando ele.
// let paragrafo = document.querySelector('p');
// //Colocando o texto dentro do local desejado..
// paragrafo.innerHTML = 'Ecolha um numero entre 1 e 10';
//     ####################################
// Criando uma lista vazia.
let lista = []
//Criando uma variavel de tentativas..
let = numeroTentativas = 10 ; 
//Criando uma variavel que gera o numero secreto..
let numeroSecreto = gerarNumeroAleatorio();
//Criando uma variavel que vais ser somada a cada interaçao.
let tentativas = 1;
//Criando uma funcao para facilitar o servico.
//Realiza algo que deseja, com parametros.
function exibirTextoNaTela(tag, texto ){
//Criando uma abreviacao do que fizemos acima, independente do que escolher em capo, nos passamos uma teg e um texto
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //Colocando audio no texto desejado e a linguagem desejada e a velocidade desejada.
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.20});
}

//Chamando a funcao desejada, com seus devidos paramentros.
//modifiquei a teg h1, no modo iterativo... 
exibirTextoNaTela('h1','Jogo Do Número Secreto!! ');
//Modificando a teg 'p'.
exibirTextoNaTela('p','Escolha um numero de 1 á 10!!');

//Crindo uma funcao sem parametros determinados...;
function  verificarChute() {
    //Pegando somente o imput desejado.value
    let chute = document.querySelector('input').value;
    //Colocando um texto na teg desejada.
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou');
        //Alterando a palavra se for maior que 1 tentativa.
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        
        let mensagemTentativas =`'Parabens voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`

        //Modificando o local da teg p tbem..
        exibirTextoNaTela('p',mensagemTentativas);
        // Desabilitando um atributo no html
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto e menor ');
        } else {exibirTextoNaTela('p','O numero e maior');
    }

    console.log(numeroSecreto);
    console.log('O botao foi clicado');
    console.log(numeroSecreto==chute);
    tentativas++
    limparCampo();
}
}

//Criando uma funcao que ela return um numero aleatorio. 
function gerarNumeroAleatorio(){
    //Gerando numero aleatorio usando o MATH, convrtendo para int
    // return parseInt(Math.random() * 10 +1); (Retorno!)
    //Criando uma variavel:
    let numeroEscolhido = parseInt(Math.random() * numeroTentativas + 1);
    let quantidadeDeElementosNaLista = lista.length;
    //Zerando as tentativas depois de tentar com todas elas.
    if (quantidadeDeElementosNaLista == numeroTentativas){
        lista = [];
    }


    //Verificando se na lista ja tem o numero escolhido,usando a funcao.includes.
    if (lista.includes(numeroEscolhido))
        {
            return gerarNumeroAleatorio();
    } else {
        lista.push(numeroEscolhido)
        console.log(lista)
        return numeroEscolhido;
    }
};
//Limpando o local aonde o usuario digita o numero.
function limparCampo(){
    chute = document.querySelector('input');
    //Esvaziando o campo input
    chute.value = '';
}

// Reiniciando o jogo depois de apertar o botao..
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do numero secreto')
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 10 ')
    //Abilitando o botao novo jogo so quando necessario
    document.getElementById('reiniciar').setAttribute('disabled',true)

}