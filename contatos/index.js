const express = require("express")
const contatoSchema = require("./schemas/contato")
const {Contato} = require("./models")



app = express()

app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/", async (req, res) => {
    const contato = req.body

    const resultado = contatoSchema.safeParse(contato)

    if(!resultado.success){
        const erros = resultado.error.issues.map(issue => {
            return issue.message
        })
        res.send(erros.join(";"))
    }else{
        await Contato.create(contato)
        res.send("Contato salvo com sucesso")
    }
})

app.get("/contatos", async (req, res) => {
    const contatos = await Contato.findAll()

    res.render("lista", {contatos: contatos})
})

app.listen(3000, () => {})