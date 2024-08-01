// FS => FileSystem
const fs = require("fs")

// Ler um arquivo de forma síncrona
// Rece dois parâmetros:
// Caminho do arquivo a ser lido
// Encoding que o arquivo foi salvo
try{
    const dadosDoArquivo = fs.readFileSync('./conteudo.txt', 'utf8')

    // quebro o texto em um array com as partes separadas
    const dadosLidos = dadosDoArquivo.split('\n')

    dadosLidos.forEach(linha => {
        if(linha != '\r') // usado para ignorar a linha que possui este conteúdo
        console.log(linha)  
    })
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