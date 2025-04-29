const http = require("http") //trazer um módulo dentro de outro arquivo, consigo trazer o módulo nativo do node, o http é o módulo nativo
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ola Mundo \n Meu Primeiro Script');
})

server.listen(port, host, ()=>{
    console.log(`Sever running at http://${host}:${port}`)
})