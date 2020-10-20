const { resolve } = require('path')

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'foi')
    .then(frase => frase.concat('!'))
    .then(outrafrase => console.log(outrafrase))


http = require('http')
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })

}

// getTurma('A').then(alunos => {
//     nome = nomes.concat(alunos.map)
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    // .then(x => console.log(x))
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(a => a.nome))
    .then(x => console.log(x))

getTurma('D')
    .catch(e => console.log(e))