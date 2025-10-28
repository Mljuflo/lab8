// Función para sumar los tres valores ingresados por el usuario.
function sumarValores() {
    // Obtener los valores de los campos de entrada y convertirlos a números.
    const valor1 = parseFloat(document.getElementById('valor1').value) || 0;
    const valor2 = parseFloat(document.getElementById('valor2').value) || 0;
    const valor3 = parseFloat(document.getElementById('valor3').value) || 0;

    // Calcular la suma total.
    const suma = valor1 + valor2 + valor3;

    // Mostrar el resultado en el párrafo correspondiente.
    document.getElementById('resultado').innerText = `La suma de los valores ingresados es: ${suma}`;
}