var http = require("http");

http.createServer(function (request, response) {
        response.writeHead(200,{'Context-Type':'text/plain'});
        response.end('Ola pessoal do SENAC\n');
}).listen(8081);

console.log("Servidor esta rodando na porta 8081, acesse em http://localhost:8081");
