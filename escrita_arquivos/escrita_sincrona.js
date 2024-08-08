const fs = require('fs')

const algum_dado = "Novo Conteúdo a ser inserido no arquivo novo."

try{
    fs.writeFileSync('arquivo.txt', algum_dado)
    console.log("Arquivo escrito com sucesso!")
}catch(err){
    console.log(err)
}