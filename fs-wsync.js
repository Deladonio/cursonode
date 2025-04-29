const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da Leitura do Arquivo");

const dados = fs.readFile("arquivo.txt",(err, data)=>{
    if(err) throw err;
    console.log("Terminei a leitura do Arquivo.txt");
});

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Executando o console após o Arquivo");