function teste():void{ //void: quando não retorna nada
    console.log("teste")
}

function logar(user: string, pass:string):void{ //void: quando não retorna nada
    console.log(`User: ${user}`)
    console.log(`Senha: ${pass}`)
}

logar('katheleen', '123')
logar('maria', '456')

function soma2(n1:number, n2:number):number{ //retorno do tipo number
    return n1+n2
}

//res: será definido como number automaticamente
const res:number = soma2(10,5 )
console.log(res)
//console.log(soma2(10,5))

function soma3(n2:number, n3:number):number{ //retorno do tipo number
    let r = n2+n3
    return r
}

console.log(soma3(10, 15))

//Armazenar number em uma string, devemos converter com o "toString()"
let s_Res:string = soma3(2, 8).toString()

console.log(s_Res)


