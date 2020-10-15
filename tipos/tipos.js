"use strict";
// Sting
var x = 'João';
// a = 28
console.log(x);
// numbers
var b = 19;
// b = 'aaa'
console.log(b);
// boolean
var c = true;
// b = 1
console.log(c);
// tipos explicitos
var d;
d = 10;
console.log(typeof d);
d = 'a';
// array
var ar = ['a', 'b', 'c'];
console.log(ar[0]);
// ar = [1, 2, 3]
// array
var ar2 = ['a', 'b', 'c'];
console.log(ar2[0]);
ar2 = [1, 2, 3];
// tuplas
var endereco = ['rua abc', 99];
console.log(endereco);
// enums
var cor;
(function (cor) {
    cor[cor["Cinza"] = 0] = "Cinza";
    cor[cor["verde"] = 100] = "verde";
    cor[cor["azul"] = 10] = "azul";
    cor[cor["laranja"] = 11] = "laranja";
    cor[cor["amarelo"] = 12] = "amarelo";
    cor[cor["vermelho"] = 100] = "vermelho";
})(cor || (cor = {}));
var minhaCor = cor.verde;
// any
var carro = 'BWM';
carro = { marca: 'BMW', ano: 2021 };
function retornaString() {
    return a;
}
function digaOi() {
    console.log('oi');
}
function multiplicar(x, y) {
    return x * y;
}
// tipo funcao
var calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
calculo(5, 6);
// objetos
var usuario = {
    nome: 'joao',
    idade: 22
};
// usuario = {}
// usuario = {
//     name: 'joao',
//     age: 22
// }
var funcionario = {
    supervisores: ['ana', 'fernando'],
    baterPonto: function (horario) {
        if (horario >= 8)
            return 'Ponto normal';
        else
            return 'Ponto atrasado';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
var funcionario2 = {
    supervisores: ['carla', 'joao'],
    baterPonto: function (horario) {
        if (horario >= 8)
            return 'Ponto normal';
        else
            return 'Ponto atrasado';
    }
};
// union types
var nota = 13;
console.log("Minha nota \u00E9 " + nota + "!");
// never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'oi',
    preco: -1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Nome inválido');
        }
    }
};
produto.validarProduto();
var altura = 12;
// altura = null
var alturaOpcional = null;
var contato1 = {
    nome: 'fulano',
    tel1: '343242552',
    tel2: null
};
// valores q recebem null sao any por padrão
var podeSerNulo = null;
podeSerNulo = 1;
podeSerNulo = 'abc';
podeSerNulo = true;
podeSerNulo = [];
var conta = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: conta,
    contatos: ['34567890', '98765432']
};
console.log('\n\n\n\n');
correntista.contaBancaria.depositar(3000);
console.log(correntista);
