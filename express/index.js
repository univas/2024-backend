const express = require("express")
const app = express()
// rota raiz  // Lorem = ctrl + shift + p
app.get('/', (req, res) => {
    const html = `
        <form>
        </form>
    `
    res.send("<strong>Minha primeira página com express</strong>")
})

app.get('/sobre', (req, res) => {
    res.send("Sobre o site")
})

app.listen(3000, () => {
    console.log("Servidor está escutando...")
})