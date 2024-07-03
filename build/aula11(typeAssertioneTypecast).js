"use strict";
let nvalor;
let svalor;
let uvalor;
//Afirmação de tipo: permite você inserir um number em uma unknowm 
uvalor = 10;
nvalor = 10;
// nvalor =<number><unknown>svalor
// nvalor = Number.parseInt(svalor)
//Converter um number para string
svalor = nvalor.toString();
console.log(typeof (svalor));
console.log(svalor);
/*
A atribuição não funciona
nvalor = uvalor
*/
//Afirmando funciona com o <number>
// svalor =<string>uvalor
// svalor+=10
/*
console.log(typeof(uvalor))
console.log(uvalor)

console.log(typeof(nvalor))
console.log(nvalor)

console.log(typeof(svalor))
console.log(svalor)*/ 
