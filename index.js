// Importa o Express
import express from "express";

// Determinar a porta
const port = 3000;

// Cria uma instância do Express
const app = express();

// Define a rota raiz
app.get("/", (request, response) => {
    response.send("<h2>Home</h2>");
});

// Rota da página Sobre
app.get("/sobre", (request, response) => {
    response.send("<h2>Sobre</h2>");
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
