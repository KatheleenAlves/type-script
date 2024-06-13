"use strict";
//Enumera as posiçoes da variável em um objeto, qualquer valor
var dias;
(function (dias) {
    dias[dias["domingo"] = 500] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 333] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
// console.log(dias.domingo)
// console.log(dias['domingo'])
// console.log(dias[1])
const d = new Date();
// console.log(d.getDay())
// console.log(dias[d.getDay()])
//FORMA TEXTUAL
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
//Usar como indice
console.log(cores["branco"]);
// console.log(cores["#fff"]) Não funciona, apenas de fosse númerico
//Enumeração automática
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["user"] = 10] = "user";
    tipoUsuario[tipoUsuario["admin"] = 100] = "admin";
    tipoUsuario[tipoUsuario["super"] = 1000] = "super";
})(tipoUsuario || (tipoUsuario = {}));
//Imprime o valor de posição
console.log(tipoUsuario.user);
//Limitar os tipos de dados através de um enum ja feito para uma variável
const tp = 10;
const tp1 = tipoUsuario.super;
console.log(tp);
console.log(tp1);
