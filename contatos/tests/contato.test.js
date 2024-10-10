const contatoSchema = require("../schemas/contato")
test("Cria um contato válido.", () => {
    const contato = {
        nome: "Marcos",
        email: "marcosantonio@univas.edu.br",
        telefone: "(35) 99867-2990"
    }

    const validacao = contatoSchema.safeParse(contato)

    expect(validacao.success).toBeTruthy()
})