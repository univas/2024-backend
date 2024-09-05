const express = require("express")
const app = express()

app.use(express.urlencoded())

app.get('/', (req, res) => {
    const formulario = `
        <form method="post">
            <label>nome</label>
            <input type="text" name="nome"/><br>
            <label>email</label>
            <input type="text" name="email"/><br>
            <button type="submit">Enviar</button>
        </form>
    `
    res.send(formulario)
})

app.post('/', (req, res) => {
    res.send(`O nome digitado é: ${req.body.nome}<br> Com e-mail: ${req.body.email}`)
})

app.listen(3000, () => {
    console.log("rodando")
})