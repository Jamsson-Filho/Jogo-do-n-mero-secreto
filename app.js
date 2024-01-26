let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = escolherNumeroAleatorio();
let tentativas = 1;

function exibirTexoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;  
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}  

    exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
    exibirTexoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;   
    exibirTexoNaTela('p', mensagemTentativas );
    document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTexoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTexoNaTela('p', 'O número secreto é maior'); 
        } 
        tentativas++;
        limparCampo();
    }
}
    
function escolherNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;
   if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumeroSorteados = []
   }
    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
    return escolherNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido)
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido
    }
} 
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto =  escolherNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial()
        document.getElementById('reiniciar').setAttribute('disabled', true)
}
function exibirMensagemInicial(){
    exibirTexoNaTela("h1" , "Jogo do número secreto");
    exibirTexoNaTela('p' , `Escolha um número entre 1 e ${numeroLimite}` );
}