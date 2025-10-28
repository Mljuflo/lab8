// Función para comparar dos números.
function compararValores() {
    // Obtener los valores y convertirlos a números.
    const numero1 = parseFloat(document.getElementById('numero1').value) || 0;
    const numero2 = parseFloat(document.getElementById('numero2').value) || 0;

    let mayor, menor;

    // Determinar cuál número es mayor y cuál es menor.
    if (numero1 > numero2) {
        mayor = numero1;
        menor = numero2;
    } else {
        mayor = numero2;
        menor = numero1;
    }

    // Calcular la diferencia entre ambos.
    const diferencia = mayor - menor;

    // Mostrar el resultado de la comparación.
    document.getElementById('resultado').innerText = `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
}