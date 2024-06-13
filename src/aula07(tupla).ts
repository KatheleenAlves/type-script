//TUPLA: ESPECIFICA O TIPO DE DADOS PARA CADA POSIÇÃO DO ARRAY
//Readonly: qualquer variável

// `${}`
let coisas: readonly [string, number, boolean] = [
    "amor",
    10,
    true
]
//O index ele só vai ate o número que você estipulou, se você colocar mais de 3, como abaixo, você não consegue imprimir
// coisas.push("kit médico", 5, true)

//Alterar tupla
// coisas[2] = false

console.log(coisas)
console.log(`Imprimir por posição: ${coisas[1]}`)