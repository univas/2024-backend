// Utilizando uma função assíncrona
// Crie um código que escreve um texto em um arquivo
// Após concluir, leia o conteúdo do arquivo
// Compare se o conteúdo é igual ao que você escreveu
// Imprima o resultado (Igual ou não.)

// Caso o arquivo não exista, escreva na saída
// ARQUIVO INEXISTENTE

// Dica: Utilize(await fs.writeFile; await fs.readFile)



const fs = require("fs").promises

async function executar(){
    try{
        const mensagem = "Conteúdo digitado"

        await fs.writeFile("arquivo.txt", mensagem)

        console.log("Arquivo escrito com sucesso!")

        const conteudo = await fs.readFile("arquivo.txt", "utf8")

        if(conteudo == mensagem){
            console.log("O conteúdo é igual")
        }else{
            console.log("O conteúdo escrito foi diferente")
        }
    }catch(err){
        console.log("Erro ao escrever arquivo")
    }
}

executar()