function area(largura, altura) {
    const area = largura * altura
    if(area > 20) console.log('valor acima')
    else return area
}
console.log(area(2, 4))
console.log(area(2))
console.log(area(1, 2, 3))
console.log(area(5, 5))