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

let funcionario: {
    supervisores: string[],
    baterPonto: (horas: number) => string
} = {
    supervisores: ['ana', 'fernando'],
    baterPonto(horario: number): string {
        if(horario >= 8) return 'Ponto normal'
        else return 'Ponto atrasado'
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// Alias
type Funcionario =  {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario2: Funcionario = {
    supervisores: ['carla', 'joao'],
    baterPonto(horario: number): string {
        if(horario >= 8) return 'Ponto normal'
        else return 'Ponto atrasado'
    }
}

// union types

let nota: number | string = 13

console.log(`Minha nota é ${nota}!`)

// never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'oi',
    preco: -1,
    validarProduto() {
        if(!this.nome || this.nome.trim().length === 0) {
            falha('Nome inválido')
        }
    }
}

produto.validarProduto()

let altura = 12
// altura = null

let alturaOpcional: null | number = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null,
}

const contato1: Contato = {
    nome: 'fulano',
    tel1: '343242552',
    tel2: null
}

// valores q recebem null sao any por padrão
let podeSerNulo = null
podeSerNulo = 1
podeSerNulo = 'abc'
podeSerNulo = true
podeSerNulo = []


type ContaBancaria =  {
    saldo: number,
    depositar: (valor: number) => void
}

let conta: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number): void {
        this.saldo += valor
    }
}

type Correntista = {
    nome: String
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: conta,
    contatos: ['34567890', '98765432']
}
 
console.log('\n\n\n\n')
correntista.contaBancaria.depositar(3000)
console.log(correntista)
