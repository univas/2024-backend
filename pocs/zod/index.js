const {z} = require("zod")

const contatoSchema = z.object({
    nome: z.string({ message: "Campo Nome é obrigatório." }).min(3, { message: "Campo Nome é obrigatório com pelo menos 03 caracteres." }),
    email: z.string({ message: "Campo e-mail é obrigatório." }).email({ message: "Deve ser um e-mail válido." })
})

// Simulando os dados vindo da requisição Express
const body = {
    nome: "Marcos",
    email: "marcosantonio@univas.edu.br"
}

const resultado = contatoSchema.safeParse(body)

if(resultado.success){
    console.log("É um formulário OK.")
}else{
    const erros = resultado.error.issues.map(issue => {
        return issue.message
    })

    
    console.log(erros.join(";"))
}

