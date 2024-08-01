const fs = require("fs")

// Por padrão o stream vai ler 64KB por chunk.
const stream = fs.createReadStream('./conteudo.txt', {
    encoding: 'utf8',
    highWaterMark: 1024
})

// Quando eu receber algum dado
stream.on('data', (chunk) => {
    console.log("----------------------------")
    console.log(chunk)

    stream.pause()

    setTimeout(() => {
        stream.resume()
    }, 1000)
})


stream.on('end', () => {
    console.log("Arquivo finalizado")
})