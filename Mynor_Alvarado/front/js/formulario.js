document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('formUsuario');

    const nombre = document.getElementById('nombre');
    const fecha = document.getElementById('fecha');
    const telefono = document.getElementById('telefono');
    const correo = document.getElementById('correo');
    const edad = document.getElementById('edad');

    const errorNombre = document.getElementById('errorNombre');
    const errorFecha = document.getElementById('errorFecha');
    const errorTelefono = document.getElementById('errorTelefono');
    const errorCorreo = document.getElementById('errorCorreo');
    
    // validaciones

    function validarNombre() {
        const regex = /^[A-Za-z\s]+$/;
        if (!regex.test(nombre.value)) {
            errorNombre.textContent = 'El nombre solo puede contener letras.';
            return false;
        }
        errorNombre.textContent = '';
        return true;
    }

    function validarTelefono() {
        const regex = /^\d{8}$/; 
        if (!regex.test(telefono.value)) {
            errorTelefono.textContent = 'El teléfono debe tener solo números y 8 dígitos.';
            return false;
        }
        errorTelefono.textContent = '';
        return true;
    }

    function validarCorreo() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(correo.value)) {
            errorCorreo.textContent = 'Ingrese un correo válido (ejemplo: pepito@example.com).';
            return false;
        }
        errorCorreo.textContent = '';
        return true;
    }   
    
    function validarFecha() {
        const regex = /^\d{2}-\d{2}-\d{4}$/;
        if (!regex.test(fecha.value)) {
            errorFecha.textContent = 'El formato debe ser DD-MM-AAAA.';
            return false;
        }
        errorFecha.textContent = '';
        calcularEdad();
        return true;
    }

    function calcularEdad() {
        const partes = fecha.value.split('-');
        const dia = parseInt(partes[0]);
        const mes = parseInt(partes[1]) - 1;
        const anio = parseInt(partes[2]);

        const nacimiento = new Date(anio, mes, dia);
        const hoy = new Date();

        let años = hoy.getFullYear() - nacimiento.getFullYear();

        if (
            hoy.getMonth() < nacimiento.getMonth() ||
            (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate())
        ) {
            años--;
        }

        edad.value = años;
    }

    // eventos    
    nombre.addEventListener('input', validarNombre);
    telefono.addEventListener('input', validarTelefono);
    correo.addEventListener('input', validarCorreo);
    fecha.addEventListener('input', validarFecha);

    // envío del formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const v1 = validarNombre();
        const v2 = validarFecha();
        const v3 = validarTelefono();
        const v4 = validarCorreo();

        if (!v1 || !v2 || !v3 || !v4) {
            alert("Complete correctamente todos los campos.");
            return;
        }

        alert("Validación correcta. Formulario enviado.");
    });

});
