// Función para calcular el cuadrado de un número ingresado.
function calcularCuadrado() {
    // Obtener el valor del campo de entrada y convertirlo a número.
    const numero = parseFloat(document.getElementById('numero').value) || 0;

    // Calcular el cuadrado del número.
    const cuadrado = numero * numero;

    // Mostrar el resultado en pantalla.
    document.getElementById('resultado').innerText = `El cuadrado de ${numero} es: ${cuadrado}`;
}