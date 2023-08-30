const express = require('express');
const path = require('path');
const app = express();

// Configuração para servir arquivos estáticos na pasta atual
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'jogo.html'));
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
    
});

