//FORMA DE ARRAY 2:
let n1: number[] = [
    20,
    30,
    40
]

//FORMA DE ARRAY 2:
//| : union types
let n2:Array<number | string>=[
    20,
    30
]

//FORMA DE ARRAY 3:
let n3:(number | string)[]=[
    20,
    30
]

//push: insere no final do array
n1.push(50)

//unishit: insere no inicio
n1.unshift(10)

//pop: remove o último elemento do array
n1.pop()

//shitf: remove o primeiro elemento do array
n1.shift()
console.log(n1)

//ARRAY READ ONLY: descarta todos os métodos, como alteração, adicionar e tals, modificação n é permitida
let numeros_ro: ReadonlyArray<number>=[
    100,
    200,
    300
]

console.log(numeros_ro)

numeros_ro.push()
numeros_ro.unshift()