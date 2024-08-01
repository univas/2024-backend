const fs = require('fs')

const arquivo = fs.readFile('./conteudo.txt', 'utf8', (erro, dados) => {
    console.log("Arquivo Lido")
    console.log(dados)
})

console.log("Terminei de ler")