"use strict";
class Curso {
    canal = null;
    curso = null;
    //any: qualquer tipo de dado
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso("CFBCursos", "Typescript");
console.log(c1.canal);
console.log(c1.curso);
