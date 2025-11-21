const db = require("../db/conexion");

// Reporte de todos los usuarios 
exports.reporteTodos = async () => {
    const [rows] = await db.query(`
        SELECT 
            u.id, 
            u.nombre, 
            u.telefono, 
            u.correo,
            e.titulo AS estado
        FROM usuario u
        JOIN estado_usuario e ON u.estado_usuario_id = e.id
    `);
    return rows;
};

// Reporte de usuarios creados hoy
exports.reporteHoy = async () => {
    const [rows] = await db.query(`
        SELECT id, nombre, telefono, correo
        FROM usuario
        WHERE DATE(creacion) = CURDATE()
    `);
    return rows;
};

// Reporte de usuarios creados ayer
exports.reporteAyer = async () => {
    const [rows] = await db.query(`
        SELECT id, nombre, telefono, correo
        FROM usuario
        WHERE DATE(creacion) = DATE_SUB(CURDATE(), INTERVAL 1 DAY)
    `);
    return rows;
};
