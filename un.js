const fs = require("fs");

fs.readFile("arquivo.txt",(err, data)=>{
    if(err) throw err;
    console.log(data);

    fs.unlink("arquivo2.txt", (unlinkErr)=> {
        if(unlinkErr) throw unlinkErr;
        console.log("Arquivo Excluído com sucesso!")
    });
});
