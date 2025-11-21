function validarNombre(nombre) {
    return /^[A-Za-z\s]+$/.test(nombre || "");
}

function validarTelefono(telefono) {
    return /^[0-9]+$/.test(telefono || "");
}

function validarCorreo(correo) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo || "");
}

function validarFecha(fecha) {
    return /^\d{2}-\d{2}-\d{4}$/.test(fecha || "");
}

function calcularEdad(fecha) {
    const [dd, mm, yyyy] = fecha.split("-");
    const nacimiento = new Date(yyyy, mm - 1, dd);
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    if (
        hoy.getMonth() < nacimiento.getMonth() ||
        (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate())
    ) {
        edad--;
    }

    return edad;
}

function convertirFechaSQL(fecha) {
    const [dd, mm, yyyy] = fecha.split("-");
    return `${yyyy}-${mm}-${dd}`;
}

module.exports = {
    validarNombre,
    validarTelefono,
    validarCorreo,
    validarFecha,
    calcularEdad,
    convertirFechaSQL
};
