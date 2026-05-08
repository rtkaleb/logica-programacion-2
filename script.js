function convertir() {
            var celsius = document.getElementById("celsius").value;
            var fahrenheit = (celsius * 9/5) + 32;
            var kelvin = parseFloat(celsius) + 273.15;

            document.getElementById("resultado").innerHTML = celsius + "°C = " + fahrenheit.toFixed(2) + "°F = " + kelvin.toFixed(2) + "K";
        }
           





