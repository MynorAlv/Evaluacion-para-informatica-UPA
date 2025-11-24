document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('formUsuario');

    const correo = document.getElementById('correo');
    const Punteo = document.getElementById('Punteo');
    
    const errorCorreo = document.getElementById('errorCorreo');
    const errorPunteo = document.getElementById('errorPunteo');

    // validaciones

    function validarCorreo() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!regex.test(correo.value)) {
            errorCorreo.textContent = 'Ingrese un correo válido (ejemplo: pepito@example.com).';
            return false;
        }
        errorCorreo.textContent = '';
        return true;
    } 
   

    function validarPunteo() {
        const regex = /^([1-9]{1,2}|100)$/; 
        if (!regex.test(Punteo.value)) {
            errorPunteo.textContent = 'El Punteo debe ser un numero entero entre 1 a 100.';
            return false;
        }
        errorPunteo.textContent = '';
        return true;
    }

    // eventos    
    correo.addEventListener('input', validarCorreo);
    Punteo.addEventListener('input', validarPunteo);


    // envío del formulario
    form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const v1 = validarCorreo();
    const v2 = validarPunteo();


    if (!v1 || !v2 || !v3 || !v4) {
        alert("Complete correctamente todos los campos.");
        return;
    }

    try {
        const respuesta = await fetch("http://localhost:3000/guardar_punteo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                
                correo: correo.value,
                Punteo: Punteo.value,
            }),
        });

        const data = await respuesta.json();

        if (!respuesta.ok) {
            alert(data.error || "Ocurrió un error al guardar el punteo.");
            return;
        }

        alert(`Punteo almacenado correctamente. ID generado: ${data.id}`);
    } catch (error) {
        console.error(error);
        alert("No se pudo conectar con el servidor backend.");
    }
});

});
