const fs = require("fs")

fs.watch('./notas.txt', (eventType, filename) => {
    if(filename){
        console.log(`Tipo do evento: ${eventType}`)
        console.log(`Arquivo: ${filename}`)
    }
})

fs.watch('.', (eventType, filename) => {
    if(filename){
        console.log(`Tipo do evento: ${eventType}`)
        console.log(`Arquivo: ${filename}`)
    }
})