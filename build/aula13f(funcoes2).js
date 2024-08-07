"use strict";
//Criar parametros com valores opcionais ou padrões
//Definindo valores como number=0 no padrão, torna-se dispensável informar o valor na hr do console log por exemplo
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(5, 5)); //Você consegue "negar" os valores dos parametros
//Tornar parametros opcionais
//nome?:string -> o "?" significa que é um parametro opcional
function novoUser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados);
}
novoUser('br', '123');
