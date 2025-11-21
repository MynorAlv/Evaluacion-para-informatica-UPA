const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./routes/usuario");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor backend iniciado en http://localhost:${PORT}`);
});
