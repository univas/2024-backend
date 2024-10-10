const {z} = require("zod")

const contatoSchema = z.object({
    nome: z.string({message: "Campo nome é obrigatório"}).min(3, {message: "O nome deve ter no mínimo 03 caracteres."}),

    email: z.string({ message: "Campo e-mail é obrigatório." }).email({ message: "Deve ser um e-mail válido." }),

    telefone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, {message: "Deve enviar um telefone válido"})
})

module.exports = contatoSchema