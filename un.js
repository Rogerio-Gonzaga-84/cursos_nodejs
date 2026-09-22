// PERMITE VC EXLUIIR UM ARQUII EXEPLO QUERO LER E DEPOIS DELETAR O ARQUIVO 
// , vai ler assicorna ou seja executa sem ser em fila ou algo parecido

const fs = require("fs");

fs.readFile("file.txt", (err, data)=>{  // Aqui nao bloqeuante  
    if (err) throw err;
    console.log(data);

});

fs.unlinkSync("file.txt") // Deleta o arquivo aqui e  bloqueante 

// ele lei e matou no meio da leitura do arquivo