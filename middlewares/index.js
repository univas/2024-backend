const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log("Acessou aqui") // log
    next()
})

// Este middleware vai executar após o anterior
// O Express sempre vai seguir a hierarquia que foi declarada
app.use((req, res, next) => {
    console.log("Autenticação") // Auth
    next()
})

app.get("/", (req, res, next) => {
    // Este middleware vai executar antes do controlador
    // da rota / get
    console.log("Middleware get /")
    next()
})

app.use("/", (req, res, next) => {
    // Este middleware vai executar antes do controlador
    // da rota / em todos os métodos
    console.log("Middleware /")
    next()
})

app.get("/", (req, res) => {
    res.send("Rota principal")
})

app.get("/nova", (req, res) => {
    res.send("Nova rota")
})

app.get("/contato", (req, res) => {
    res.send("Contato")
})

app.listen(3000, () => {
    console.log("Rodando....")
})