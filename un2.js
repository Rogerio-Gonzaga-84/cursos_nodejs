// aqui o mesmo codigo porem ele todo como nao bloquenate 

// PERMITE VC EXLUIIR UM ARQUII EXEPLO QUERO LER E DEPOIS DELETAR O ARQUIVO 
// , vai ler assicorna ou seja executa sem ser em fila ou algo parecido

const fs = require("fs");

fs.readFile("file.txt", (err, data)=>{  // Aqui nao bloqueante  
    if (err) throw err;
    console.log(data);

fs.unlink("file.txt",(unlinkErr)=>{
        if (unlinkErr) throw unlinkErr;
        console.log("Arquivo Deletado com sucesso");

    });

});

