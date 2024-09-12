const express = require("express");

const cliente_routes = require("./routes/cliente.js");
const livraria_routes = require("./routes/livraria.js");

const app = express();


app.use(express.json());

// Rotas
app.use("/cliente", cliente_routes);
app.use("/livraria", livraria_routes);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
