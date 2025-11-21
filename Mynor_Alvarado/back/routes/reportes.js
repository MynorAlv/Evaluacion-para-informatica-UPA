const express = require("express");
const router = express.Router();

const {
    reporteTodos,
    reporteHoy,
    reporteAyer
} = require("../controllers/reportesController");

router.get("/ejecutar_reporte/:reporte", async (req, res) => {
    try {
        const { reporte } = req.params; 

        let resultado;

        switch (reporte) {
            case "todos":
                resultado = await reporteTodos();
                break;

            case "hoy":
                resultado = await reporteHoy();
                break;

            case "ayer":
                resultado = await reporteAyer();
                break;

            default:
                return res.status(500).json({
                    error: "Ocurrió un error inesperado. El reporte no existe."
                });
        }

        return res.json(resultado);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Ocurrió un error inesperado en el servidor."
        });
    }
});

module.exports = router;
