"use strict";
// Sting
let x = 'João';
// a = 28
console.log(x);
// numbers
let b = 19;
// b = 'aaa'
console.log(b);
// boolean
let c = true;
// b = 1
console.log(c);
// tipos explicitos
let d;
d = 10;
console.log(typeof d);
d = 'a';
// array
let ar = ['a', 'b', 'c'];
console.log(ar[0]);
// ar = [1, 2, 3]
// array
let ar2 = ['a', 'b', 'c'];
console.log(ar2[0]);
ar2 = [1, 2, 3];
// tuplas
let endereco = ['rua abc', 99];
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
let minhaCor = cor.verde;
// any
let carro = 'BWM';
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
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
calculo(5, 6);
// objetos
let usuario = {
    nome: 'joao',
    idade: 22
};
// usuario = {}
// usuario = {
//     name: 'joao',
//     age: 22
// }
let funcionario = {
    supervisores: ['ana', 'fernando'],
    baterPonto(horario) {
        if (horario >= 8)
            return 'Ponto normal';
        else
            return 'Ponto atrasado';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
let funcionario2 = {
    supervisores: ['carla', 'joao'],
    baterPonto(horario) {
        if (horario >= 8)
            return 'Ponto normal';
        else
            return 'Ponto atrasado';
    }
};
// union types
let nota = 13;
console.log(`Minha nota é ${nota}!`);
// never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'oi',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Nome inválido');
        }
    }
};
produto.validarProduto();
let altura = 12;
// altura = null
let alturaOpcional = null;
const contato1 = {
    nome: 'fulano',
    tel1: '343242552',
    tel2: null
};
// valores q recebem null sao any por padrão
let podeSerNulo = null;
podeSerNulo = 1;
podeSerNulo = 'abc';
podeSerNulo = true;
podeSerNulo = [];
let conta = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: conta,
    contatos: ['34567890', '98765432']
};
console.log('\n\n\n\n');
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map