"use strict";
//NULL - UNDEFINED - UNKNOWN
//Vazio é diferente de null
let vNome;
vNome = "Kath";
console.log(vNome);
//UNDEFINED: se vc não atribuir um valor ela fica indefinida
//valor: any, tipo undefined
let vNome1;
console.log(vNome1);
//UNKNOWN: desconhecido
let vNome3 = vNome;
//Aparece como indefinido
console.log(vNome3);
//UNKNOWN: so vai com variaveis do tipo unknown ou any
// let vnum:number = vNome3
let vnum = vNome3;
console.log(vnum);
