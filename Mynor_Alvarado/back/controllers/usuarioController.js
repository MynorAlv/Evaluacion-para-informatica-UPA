const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


const db = require("../db/conexion");
const {
    validarNombre,
    validarTelefono,
    validarCorreo,
    validarFecha,
    calcularEdad,
    convertirFechaSQL,
} = require("../utils/validaciones");

exports.guardarUsuario = async (req, res) => {
    try {
        const { nombre, fecha, telefono, correo } = req.body;

        //Validacion de campos
        if (!nombre || !fecha || !telefono || !correo) {
            return res.status(400).json({
                error: "Todos los campos son obligatorios: nombre, fecha, teléfono y correo.",
            });
        }

        // validacion de formato
        if (!validarNombre(nombre))
            return res.status(400).json({ error: "El nombre solo puede contener letras." });

        if (!validarTelefono(telefono))
            return res.status(400).json({ error: "El teléfono solo debe contener números [0-9]." });

        if (!validarFecha(fecha))
            return res.status(400).json({ error: "La fecha debe tener el formato dd-mm-YYYY." });

        if (!validarCorreo(correo))
            return res.status(400).json({
                error: "El correo electrónico debe tener un formato válido (xxxxxx@xxxx.xx).",
            });

        // validacion de edad
        const edad = calcularEdad(fecha);
        if (edad < 18) {
            return res.status(400).json({
                error: "El usuario no es mayor de edad y no se puede seguir.",
            });
        }

        const estadoActivoId = 1;
        const fechaSQL = convertirFechaSQL(fecha);

        // guardar en la bd
        const [result] = await db.execute(
            `INSERT INTO usuario (nombre, fecha, telefono, correo, creacion, estado_usuario_id)
             VALUES (?, ?, ?, ?, NOW(), ?)`,
            [nombre, fechaSQL, telefono, correo, estadoActivoId]
        );

        // devolucion de id
        return res.json({
            mensaje: "Usuario almacenado correctamente.",
            id: result.insertId,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Ocurrió un error inesperado en el servidor.",
        });
    }
};
