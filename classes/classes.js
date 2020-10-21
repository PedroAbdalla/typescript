"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario);
console.log(aniversario.dia);
const aniversario2 = new Data;
console.log(aniversario2);
console.log(aniversario2.dia);
class DataEsperta {
    // PUBLICO
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
console.log('\n\n\n ########## \n\n\n');
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto);
console.log(aniversarioEsperto.dia);
const aniversarioEsperto2 = new DataEsperta;
console.log(aniversarioEsperto2);
console.log(aniversarioEsperto2.dia);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return parseFloat((this.preco * (1 - this.desconto)).toFixed(2));
    }
    resumo() {
        return `${this.nome}  custa Rs${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
}
const produto1 = new Produto('caneta', 4.20);
produto1.desconto = 0.1;
console.log(produto1);
console.log(produto1.resumo());
const produto2 = new Produto('caderno', 3.20, 0.2);
console.log(produto2);
console.log(produto2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    // protected permite usar o metodo na heranca
    alterarVelocidade(delta) {
        const novaVelo = this.velocidadeAtual + delta;
        const veloValida = novaVelo >= 0 && novaVelo <= this.velocidadeMaxima;
        if (veloValida) {
            this.velocidadeAtual = novaVelo;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeAtual : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
    mostraVelo() {
        console.log('velo: ' + this.velocidadeAtual);
    }
}
const carro1 = new Carro('Ford', 'ka', 180);
Array(30).fill(0).forEach(() => carro1.acelerar());
console.log('\n\n\n ########## \n\n\n');
console.log(carro1.mostraVelo());
console.log(carro1.acelerar());
Array(15).fill(0).forEach(() => carro1.frear());
console.log(carro1.mostraVelo());
console.log(carro1.frear());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
console.log('\n #####ferrari##### \n');
const f40 = new Ferrari('f40', 324);
console.log(`${f40.marca} - ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
//# sourceMappingURL=classes.js.map