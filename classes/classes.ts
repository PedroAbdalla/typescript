class Data {
    // PUBLICO
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991) 
aniversario.dia = 4
console.log(aniversario)
console.log(aniversario.dia)

const aniversario2 = new Data
console.log(aniversario2)
console.log(aniversario2.dia)


class DataEsperta {
    // PUBLICO


    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {

    }
}

console.log('\n\n\n ########## \n\n\n')
const aniversarioEsperto = new DataEsperta(3, 11, 1991) 
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto)
console.log(aniversarioEsperto.dia)

const aniversarioEsperto2 = new DataEsperta
console.log(aniversarioEsperto2)
console.log(aniversarioEsperto2.dia)


class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
    }

    precoComDesconto(): number {
        return parseFloat((this.preco * (1 - this.desconto)).toFixed(2))
    }

    public resumo(): string {
        return `${this.nome}  custa Rs${this.precoComDesconto()} (${this.desconto * 100}% off)`
    }
}

const produto1 = new Produto('caneta', 4.20)
produto1.desconto = 0.1
console.log(produto1)
console.log(produto1.resumo())

const produto2 = new Produto('caderno', 3.20, 0.2)
console.log(produto2)
console.log(produto2.resumo())


class Carro {
    private velocidadeAtual: number = 0
    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {
    }

    // protected permite usar o metodo na heranca
    protected alterarVelocidade(delta: number): number {
        const novaVelo = this.velocidadeAtual + delta
        const veloValida = novaVelo >= 0 && novaVelo <= this.velocidadeMaxima
        if(veloValida) {
            this.velocidadeAtual = novaVelo
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeAtual : 0
        }
        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }
    public frear(): number {
        return this.alterarVelocidade(-5)
    }
    public mostraVelo(): void {
        console.log('velo: ' + this.velocidadeAtual)
    }
}

const carro1 = new Carro('Ford', 'ka', 180)
Array(30).fill(0).forEach(() => carro1.acelerar())
console.log('\n\n\n ########## \n\n\n')
console.log(carro1.mostraVelo())
console.log(carro1.acelerar())
Array(15).fill(0).forEach(() => carro1.frear())
console.log(carro1.mostraVelo())
console.log(carro1.frear())

class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
    }
    public acelerar(): number {
        return this.alterarVelocidade(20)
    }
    public frear(): number {
        return this.alterarVelocidade(-15)
    }

}

console.log('\n #####ferrari##### \n')
const f40 = new Ferrari('f40', 324)
console.log(`${f40.marca} - ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

class Unico {
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance
    }
    agora() {
        return new Date
    }
}

console.log(Unico.getInstance().agora())


class Aviao {
    public readonly modelo: string 
    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
console.log('-----------')
console.log(turboHelice)