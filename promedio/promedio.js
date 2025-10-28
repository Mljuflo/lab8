// Función para calcular el promedio de tres calificaciones.
function calcularPromedio() {
    // Obtener el nombre del estudiante.
    const nombre = document.getElementById('nombreEstudiante').value;

    // Obtener las calificaciones y convertirlas a números.
    const calificacion1 = parseFloat(document.getElementById('calificacion1').value) || 0;
    const calificacion2 = parseFloat(document.getElementById('calificacion2').value) || 0;
    const calificacion3 = parseFloat(document.getElementById('calificacion3').value) || 0;

    // Calcular el promedio.
    const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

    // Mostrar el resultado con dos decimales.
    document.getElementById('resultado').innerText = `El promedio de ${nombre} es: ${promedio.toFixed(2)} puntos`;
}