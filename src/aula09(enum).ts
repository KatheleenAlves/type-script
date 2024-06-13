//Enumera as posiçoes da variável em um objeto, qualquer valor
enum dias{
    domingo = 500,
    segunda = 1,
    terca = 2,
    quarta = 333,
    quinta = 4,
    sexta = 5,
    sabado = 6
}

// console.log(dias.domingo)
// console.log(dias['domingo'])
// console.log(dias[1])

const d = new Date()
// console.log(d.getDay())
// console.log(dias[d.getDay()])

//FORMA TEXTUAL
enum cores{
    branco = "#fff",
    preto = "#000",
    vermelho = "#f00",
    verde = "#0f0",
    azul = "#00f"
}

console.log(cores.branco)
//Usar como indice
console.log(cores["branco"])
// console.log(cores["#fff"]) Não funciona, apenas de fosse númerico

//Enumeração automática
enum tipoUsuario{
    user = 10,
    admin = 100,
    super = 1000
}

//Imprime o valor de posição
console.log(tipoUsuario.user)

//Limitar os tipos de dados através de um enum ja feito para uma variável
const tp: tipoUsuario = 10
const tp1: tipoUsuario = tipoUsuario.super

console.log(tp)
console.log(tp1)
