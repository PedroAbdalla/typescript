// Exercício 1 - Classe
class Moto {
    public velocidade: number = 0
    constructor(public nonme: string){}
    
    public buzinar():void {
        console.log('Toooooooooot!')
    }
 
    public acelerar(delta: number) {
        this.velocidade = this.velocidade + delta
    }
}

var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 

abstract class Objeto2D {
    constructor(public base: number = 0, public altura: number = 0){}
    abstract area(): number
}

class Retangulo extends Objeto2D {
    area(): number {
        return this.base * this.altura
    }
}

 
const retangulo = new Retangulo(5, 7)

retangulo.area = function() {
    return this.base * this.altura
}
console.log(retangulo.area())
 
// Exercício 3 - Getters & Setters
var estagiario = {
    _primeiroNome: ''
}
 
Object.defineProperty(estagiario, 'primeiroNome', {
    get: function () {
        return this._primeiroNome
    },
    set: function (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    },
    enumerable: true,
    configurable: true
})
 
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)