const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//ruta usuarios
const usuarioRoutes = require("./routes/usuario");
app.use(usuarioRoutes);

//ruta reportes 
const reportesRoutes = require("./routes/reportes");
app.use(reportesRoutes);

//ruta punteo 
const punteoRoutes = require("./routes/punteo")
app.use(punteoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor backend iniciado en http://localhost:${PORT}`);
});
