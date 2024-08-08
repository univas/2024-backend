const fs = require("fs")

const algum_dado = "Dado aleatório para escrita"

// try{
    fs.writeFile('arquivo_assincrono.txt', algum_dado, (err) => {
        // throw new Error(err)
        if(err) {
            console.log(err)
        }else{
            console.log("Arquivo escrito com sucesso!")
        }
    })

    console.log("Terminei de inserir.")
// }catch(err){
//     console.log(err)
// }