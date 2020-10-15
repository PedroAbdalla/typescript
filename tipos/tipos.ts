// Sting
let x: string = 'João'
// a = 28
console.log(x)

// numbers
let b: number = 19
// b = 'aaa'
console.log(b)

// boolean
let c: boolean = true
// b = 1
console.log(c)

// tipos explicitos
let d
d = 10
console.log(typeof d)
d = 'a'

// array
let ar = ['a', 'b', 'c']
console.log(ar[0])
// ar = [1, 2, 3]

// array
let ar2: any[] = ['a', 'b', 'c']
console.log(ar2[0])
ar2 = [1, 2, 3]

// tuplas
let endereco: [string, number] = ['rua abc', 99]
console.log(endereco)

// enums
enum cor {
    Cinza, // 0
    verde = 100, // 100
    azul = 10, // 10
    laranja, // 11
    amarelo, // 12
    vermelho = 100,// 100
}

let minhaCor: cor = cor.verde

// any
let carro: any = 'BWM'
carro = {marca: 'BMW', ano: 2021}

function retornaString(): string {
    return a
}

function digaOi(): void {
    console.log('oi')
}

function multiplicar(x: number, y: number): number {
    return x * y
}

// tipo funcao
let calculo: (numeroA: number, numeroB: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
calculo(5,6)

// objetos

let usuario: {nome: string, idade: number} = {
    nome: 'joao',
    idade: 22
}

// usuario = {}
// usuario = {
//     name: 'joao',
//     age: 22
// }