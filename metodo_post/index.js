const express = require("express")
const app = express()

app.use(express.urlencoded())
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('formulario')
})

app.post('/', (req, res) => {
    const {nome, email} = req.body
    if(nome.lenght == 0){
        res.send("Nome é obrigatório")
    }
    const nomes = [
        "Marcos",
        "Ana",
        "Maria",
        "João",
        "Alfredo"
    ]
    res.render("resultado", {
        nome: nome, email: email, nomes: nomes
    })
})

app.listen(3000, () => {
    console.log("rodando")
})