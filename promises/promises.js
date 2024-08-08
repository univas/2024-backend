// resolve = then
// reject = catch
const promessa = new Promise((resolve, reject) => {
    // código a ser executado
    let success = false // variável de controle para simular a execução com erro ou não

    if(success){
        setTimeout(() => { // simula uma leitura do HD
            resolve("Função executada com sucesso!")
        }, 1000)
    }else{
        setTimeout(() => {
            reject("Erro ao executar a função!")
        }, 1000)
    }
})

promessa
.then((retorno) => {
    console.log(retorno)
})
.catch((erro) => {
    console.log(erro)
})