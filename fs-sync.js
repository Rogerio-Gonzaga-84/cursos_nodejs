// SERA UM ARQUIVO BLOQUEANTE TESTE COM ARQUIVO DE TEXTO 

const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do arquivo ");

const dados = fs.readFileSync("file.txt");

console.log("Executando o console apos o arquivo");

console.log((process.hrtime()[0]/60).toFixed(5));
