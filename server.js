// Subindo um server HTT em nodeJS

const http = require("http"); // Importa o módulo HTTP nativo do Node.js para criar um servidor

const host = "127.0.0.1"; // Define o endereço IP local onde o servidor vai funcionar

const port = 3000; // Define a porta que o servidor vai utilizar

const server = http.createServer((req, res) => { // Cria o servidor; req = requisição recebida e res = resposta que será enviada

    res.statusCode = 200; // Define o código HTTP 200, indicando que a requisição foi processada com sucesso

    res.setHeader("Content-Type", "text/plain"); // Define o tipo do conteúdo que será enviado como texto simples

    res.end("Ola mundo \n meu primeiro script!!!"); // Envia a resposta para o navegador e encerra a requisição

});

server.listen(port, host, () => { // Inicia o servidor usando a porta e o endereço definidos anteriormente

    console.log(`Server running at http://${host}:${port}`); // Mostra no terminal o endereço onde o servidor está rodando

});