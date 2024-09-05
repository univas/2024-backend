const express = require("express")
const app = express()

app.use(express.static('public'))
app.use('/textos', express.static('textos'))

app.use('/', (req, res) => {
    res.send("Area adm")
})

app.get('/', (req, res) => {
    res.send("Pagina inicial")
})

app.listen(3000, () => {
    console.log("rodando")
})