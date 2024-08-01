// FS => FileSystem
const fs = require("fs")

// Ler um arquivo de forma síncrona
// Rece dois parâmetros:
// Caminho do arquivo a ser lido
// Encoding que o arquivo foi salvo
try{
    const dadosDoArquivo = fs.readFileSync('./conteudo.txt', 'utf8')

    console.log(dadosDoArquivo)
}catch(erro){
    console.log("Erro ao abrir o arquivo.")
    console.log(erro)
}



// Lendo um arquivo que não existe para cair no catch
try{
    const dadosDoArquivo = fs.readFileSync('./conteudoNãoExistente.txt', 'utf8')

    console.log(dadosDoArquivo)
}catch(erro){
    console.log("Erro ao abrir o arquivo.")
    console.log(erro)
}