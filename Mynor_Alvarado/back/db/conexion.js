const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ujsd#hfQ@s_15',
    database: 'evaluacion_mynor_alvarado'
});

module.exports = db;