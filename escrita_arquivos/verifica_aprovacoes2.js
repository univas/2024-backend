const fs = require('fs')

// Fazendo a leitura do arquivo
fs.readFile('dados.json', 'utf8', (err, dados) => {
    // convertendo texto para JSON e extraindo a propriedade alunos
    const {alunos} = JSON.parse(dados)

    // Criando variáveis de controle para calcular
    let aprovados = 0
    let reprovados = 0
    let exame = 0

    // laço de repetição para percorrer todos alunos e contar as aprovações
    alunos.forEach(aluno => {
        if(aluno.media >= 60){
            aprovados++
        }else if(aluno.media < 30){
            reprovados++
        }else{
            exame++
        }

        // Cria a pasta do aluno
        fs.mkdir(`${aluno.nome}_${aluno.matricula}`, (err) => {
            // Verifica se deu erro para criar a pasta do aluno
            if(err) {
                console.log("falha ao criar diretório")
            }else{
                // Percorre pelos projetos que o aluno tem
                aluno.projetos.forEach(projeto => {
                    // Cria o arquivo de cada projeto do aluno
                    fs.writeFile(`${aluno.nome}_${aluno.matricula}/${projeto.titulo}.txt`, projeto.resumo, (err) => {
                        if(err){
                            console.log("Falha ao salvar trabalho")
                        }
                    })
                })
            }
            
        })
    })

    // Criando objeto resultado
    const resultado = {
        apr: aprovados,
        exm: exame,
        rep: reprovados
    }

    // Escrevendo resultado final, convertando JSON para texto
    fs.writeFile("resultado.json", JSON.stringify(resultado), (err) => {
        if(err) console.log("Erro ao salvar arquivo final")
        console.log("Arquivo final salvo com sucesso!")
    })
})