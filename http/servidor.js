const http = require('http')

const servidor = http.createServer((req, res) => {
    if(req.url == '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end('Oi HTTP!')
    }else if(req.url == '/sobre'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Sobre o Site!')
    }else{
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end('Página não encontrada')
    }
})

servidor.listen(3000, '127.0.0.1', () => {
    console.log("Servidor rodando")
})