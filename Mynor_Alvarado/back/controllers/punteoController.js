const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


const db = require("../db/conexion");
const {

    validarCorreo,
    validarPunteo,
 
   
} = require("../utils/validaciones");

exports.guardarPunteo = async (req, res) => {
    try {
        const { Punteo, correo } = req.body;

        //Validacion de campos
        if (!Punteo || !correo) {
            return res.status(400).json({
                error: "Todos los campos son obligatorios: Punteo y correo.",
            });
        }

        // validacion de formato

        if (!validarPunteo(Punteo))
            return res.status(400).json({ error: "El Punteo solo debe contener números [0-9]." });

        if (!validarCorreo(correo))
            return res.status(400).json({
                error: "El correo electrónico debe tener un formato válido (xxxxxx@xxxx.xx).",
            });


        // guardar en la bd
        const [result] = await db.execute(
            `INSERT INTO punteo_usuario (punteo, usuario_id)
             VALUES (?, ?, NOW(), ?)`,
            [Punteo, usuarioid]
        );

        // devolucion de id
        return res.json({
    mensaje: "punteo almacenado correctamente.",
    id: result.insertId,
});
} catch (error) {
    console.error(error);

    // Correo repetido
    if (error.code === "ER_DUP_ENTRY") {
        return res.status(400).json({
            error: "Usuario no existe, revisar correo.",
        });
    }

    // Error general
    return res.status(500).json({
        error: "Ocurrió un error inesperado en el servidor.",
    });
}
};
