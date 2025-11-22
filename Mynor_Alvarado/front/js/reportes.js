async function cargarReporte(tipo) {
    const resultadoDiv = document.getElementById("resultado");

    try {
        const res = await fetch(`http://localhost:3000/ejecutar_reporte/${tipo}`);
        const data = await res.json();

        if (!res.ok) {
            resultadoDiv.textContent = data.error || "Error al cargar el reporte.";
            return;
        }

        resultadoDiv.textContent = JSON.stringify(data, null, 2);

    } catch (error) {
        resultadoDiv.textContent = "No se pudo conectar al servidor.";
        console.error(error);
    }
}
