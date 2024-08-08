const fs = require("fs").promises
/*
const readFile = () => {
  return new Promise((resolve, reject) => {

    // ler arquivo
    resolve("Dados do arquivo")
  })
}
*/
fs.readFile('promises.js', 'utf8')
  .then((dados) => { // leu o arquivo com sucesso
    // console.log(dados)
  })


fs.readFile('promisses.js', 'utf8')
  .then((dados) => { // leu o arquivo com sucesso
    console.log(dados)
  })
  .catch((err) => {
    console.log("Arquivo inexistente.")
  })


// async/await
// async => informar que uma função possui código assincrono

async function lerArquivo(){
    try{
      const dados = await fs.readFile('promises.js', 'utf8')
      console.log("Arquivo lido")
    }catch(err){
      console.log("Erro ao ler o arquivo")
    }

}

lerArquivo()