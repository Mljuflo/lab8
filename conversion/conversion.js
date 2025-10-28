// Función para convertir metros a centímetros y kilómetros.
function convertirUnidades() {
    // Obtener el valor en metros y convertirlo a número.
    const metros = parseFloat(document.getElementById('metros').value) || 0;

    // Realizar las conversiones.
    const centimetros = metros * 100;
    const kilometros = metros / 1000;

    // Mostrar el resultado de la conversión.
    document.getElementById('resultado').innerText = `${metros} metros equivalen a ${centimetros} centímetros y ${kilometros} kilómetros.`;
}