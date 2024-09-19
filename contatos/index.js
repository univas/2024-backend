const express = require("express")
const {z} = require("zod")

const contatoSchema = z.object({
    nome: z.string({message: "Campo nome é obrigatório"}).min(3, {message: "O nome deve ter no mínimo 03 caracteres."}),

    email: z.string({ message: "Campo e-mail é obrigatório." }).email({ message: "Deve ser um e-mail válido." }),

    telefone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, {message: "Deve enviar um telefone válido"})
})

app = express()

app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/", (req, res) => {
    const contato = req.body

    const resultado = contatoSchema.safeParse(contato)

    if(!resultado.success){
        const erros = resultado.error.issues.map(issue => {
            return issue.message
        })
        res.send(erros.join(";"))
    }else{
        res.send("Contato salvo com sucesso")
    }
})

app.listen(3000, () => {})