// todos os meus testes de funções

const {soma} = require("./funcoes")

test("Soma de 1 + 2 deve ser igual a 3", () => {
    const resultado = soma(1,2)

    expect(resultado).toBe(3)
})

test("Soma de 10 + 20 deve ser igual a 40", () => {
    expect(soma(10,20)).toBe(40)
})