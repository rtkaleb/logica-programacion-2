function convertir() { // función para convertir grados Celsius a Fahrenheit y Kelvin

    var celsius = parseFloat( // obtenemos el valor ingresado por el usuario y lo convertimos a número
        document.getElementById("celsius").value
    );

    var fahrenheit = (celsius * 9/5) + 32; // fórmula para convertir Celsius a Fahrenheit

    var kelvin = celsius + 273.15; // fórmula para convertir Celsius a Kelvin

    if (isNaN(celsius)) { // verificamos si el valor ingresado no es un número

        document.getElementById("resultado").innerHTML =
            "Por favor, ingresa un número válido.";

        return;

    } else {

        document.getElementById("resultado").innerHTML = // mostramos los resultados con dos decimales
            "Grados Kelvin: " + kelvin.toFixed(2) +
            "<br>Grados Fahrenheit: " + fahrenheit.toFixed(2);
    }
}




