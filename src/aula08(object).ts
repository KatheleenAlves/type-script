//OBJECT:

//recebe propriedades ou funções(métodos)
//Não precisa especificar que é object
// let dados: object = {
//     nome: "Katheleen",
//     idade: 22,
//     status: "A"
// }

//Não é preciso colocar o tipo de variavel nos dados
let dados = {
    nome: "Katheleen",
    idade: 22,
    status: "A",
    ola: ()=> {console.log("Oi")},
    info: (p:string)=>{console.log(p)}
}

//Podemos alterar as propriedades
dados.nome = "Ana"

//typeof: tipo do dados
console.log(typeof(dados))

console.log(`Para imprimir somente o conteúdo da propriedade: ${dados.nome}`)

//chamando funcao
dados.ola()

dados.info("Maria")

//PASSAR O DADO DO PROPRIO OBJETO PARA A FUNÇÃO
dados.info(dados.nome)
