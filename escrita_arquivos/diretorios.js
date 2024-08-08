const fs = require('fs')

// Criar um diretório
fs.mkdir('novo_diretorio', {}, (err) => {
    if(err){
        console.log("falha ao criar diretório")
    }else{
        console.log("diretório criado com sucesso")
    }
})

// Listar o conteúdo de um diretório
fs.readdir('.', (err, arquivos) => {
    if(err){
        console.log("Erro ao ler diretório")
    }else{
        console.log("Conteúdo:", arquivos)
    }
})


//remover um arquivo
fs.unlink('arquivo.txt', (err) => {
    if(err){
        console.log("Impossível excluir arquivo")
    }else{
        console.log("Arquivo excluído")
    }
})


//remover um diretório
fs.rmdir('novo_diretorio', {}, (err) => {
    if(err){
        console.log("Erro ao excluir diretório")
    }else{
        console.log("Diretório excluído")
    }
})


//verificar antes de remover um arquivo
fs.access('arquivo.txt', (err) => {
    if(!err){ // se existir o arquivo
        fs.unlink('arquivo.txt', (err) => {
            if(err){
                console.log("Impossível excluir arquivo")
            }else{
                console.log("Arquivo excluído")
                fs.writeFile('arquivo_assincrono.txt', algum_dado, (err) => {
                    if(err) {
                        console.log(err)
                    }else{
                        console.log("Arquivo escrito com sucesso!")
                    }
                })
            }
        })
    }
})
