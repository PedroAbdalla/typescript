interface Humano {
    nome: string,
    idade?: number,
    [prop: string]: any,
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = "Maria"
}


const pessoa: Humano = {
    nome: 'joao',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('OI ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
// saudarComOla({nome: 'Pedro', idade: 20, a: ['xx']})
pessoa.saudar('Silva')

//EXEPMLO CALSSES

class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('OI ' + this.nome + ' ' + sobrenome)
    }
}

const c = new Cliente()
c.nome = 'Ana'
c.saudar('Machado')
console.log(c.ultimaCompra)

// exemplo Funcao

interface FuncaoCalculo {
    (a: number, b:number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    return base ** exp
}
console.log(potencia(3, 9))


// heranca

interface A {
    a(): void
}
interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class Real implements A {
    a(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstractABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}

interface Object {
    log(): void
}
Object.prototype.log = function() {
    console.log(this.toString())
}


const x = 2
const y = 3
const z = 4

const cli = {nome: 'Pedro', toString() {return this.nome}}
cli.log()