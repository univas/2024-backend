const fs = require("fs")

const arquivo = fs.readFileSync("./notas.txt", "utf8")

const dados = arquivo.split("\n")
const notas = []

dados.forEach(linha => {
    const campos = linha.split(";")

    let aluno = campos[0]

    const media = (parseInt(campos[1]) + parseInt(campos[2]) + parseInt(campos[3]) + parseInt(campos[4])) / 4.0

    aluno += " => " + media

    notas.push(aluno)
})

console.log(notas)