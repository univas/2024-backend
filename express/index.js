const express = require("express")
const app = express()
app.get('/', (req, res) => {
    res.send("<h1>Página principal</h1>")
})
// rota raiz  // Lorem = ctrl + shift + p
app.get('/contato', (req, res) => {
    const html = `
        <form method='get' action='/enviar-formulario'>
            <div>
                <label>Nome</label><br> 
                <input name='nome' type='text' />
            </div>
            <div>
                <label>Mensagem</label><br>
                <textarea name='mensagem' cols='20' rows='5'></textarea>
            </div>
            <div><button type='submit'>Enviar</button></div>
        </form>
    `
    res.send(html)
})

app.get('/enviar-formulario', (req, res) => {
    // query parameter
    const nome = req.query.nome
    const mensagem = req.query.mensagem
    console.log(req.query)

    const html = `
        Olá, ${nome}<br>
        Sua mensagem é: ${mensagem}
    `

    res.send(html)
})

app.get('/sobre', (req, res) => {
    const lorem = `Tempor voluptate consectetur adipisicing velit anim. Exercitation amet sunt magna aliqua dolore dolor culpa non minim officia sit. Excepteur nostrud aute nulla adipisicing officia ullamco officia dolore ad sit pariatur consequat ipsum nostrud. Aliqua ullamco in aliqua sint tempor elit deserunt culpa est est. Cillum Lorem reprehenderit aliquip voluptate consequat.
                    Ea excepteur reprehenderit aute voluptate mollit. Cillum laborum amet elit aliqua irure mollit labore ipsum ut reprehenderit ex velit ut. Enim consequat occaecat reprehenderit ullamco consequat tempor. Aliqua anim laborum ad sunt aliqua officia cupidatat laborum eu exercitation adipisicing reprehenderit.`
    res.send(lorem)
})

// rotas dinamicas
app.get('/clientes/:id_cliente', (req, res) => {
    const cliente = req.params.id_cliente
    res.send("Página do cliente: " + cliente)
})

// receber como parametro o ano de nascimento
// retornar a idade da pessoa com base no ano atual
// DIca: new Date().getFullYear()
// /formulario
// /enviar-formulario
// /idade/:ano

// Sua idade é: XXXX

app.get("/form-idade", (req, res) => {
    res.send(`<form action='/enviar-form-idade'>
                <input name='ano' />
                <button type='submit'>Enviar</button>
              </form>
                
            `)
})

app.get("/enviar-form-idade", (req, res) => {
    const ano_atual = new Date().getFullYear()
    const ano_enviado = req.query.ano

    res.send(`Sua idade é : ${ano_atual - ano_enviado}`)
})

app.get("/idade/:ano", (req, res) => {
    const ano_atual = new Date().getFullYear()
    const ano_enviado = req.params.ano
    res.send(`Sua idade é : ${ano_atual - ano_enviado}`)
})


app.listen(3000, () => {
    console.log("Servidor está escutando...")
})