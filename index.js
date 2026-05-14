const express = require("express");

const usuarioController = require("./src/Controllers/usuarioControlles");

const app = express();

const port = 3000;

app.use(express.json());

app.post("/usuarios", usuarioController.criar);

app.listen(port, () => {
  console.log("================================");
  console.log(`Servidor rodando na porta ${port}`);
  console.log("================================");
});