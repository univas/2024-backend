const fs = require("fs")

fs.readFile("./alunos.json", 'utf8', (erro, dados) => {
    console.log(dados)

    const json = JSON.parse(dados)
    console.log(json)
})