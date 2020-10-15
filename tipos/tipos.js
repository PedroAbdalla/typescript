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
