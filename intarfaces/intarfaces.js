"use strict";
function saudarComOla(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Maria";
}
const pessoa = {
    nome: 'joao',
    idade: 27,
    saudar(sobrenome) {
        console.log('OI ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
// saudarComOla({nome: 'Pedro', idade: 20, a: ['xx']})
pessoa.saudar('Silva');
//EXEPMLO CALSSES
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('OI ' + this.nome + ' ' + sobrenome);
    }
}
const c = new Cliente();
c.nome = 'Ana';
c.saudar('Machado');
console.log(c.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(3, 9));
class Real {
    a() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstractABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
const cli = { nome: 'Pedro', toString() { return this.nome; } };
cli.log();
//# sourceMappingURL=intarfaces.js.map