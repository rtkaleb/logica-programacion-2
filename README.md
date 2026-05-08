# logica-programacion-2
Conversor de Temperatura
Aplicación web sencilla desarrollada con HTML, CSS y JavaScript que permite convertir temperaturas ingresadas en grados Celsius a:


Grados Fahrenheit


Grados Kelvin



Vista previa
El usuario ingresa una temperatura en Celsius y el sistema:


Valida que el dato ingresado sea un número válido.


Realiza automáticamente las conversiones.


Muestra los resultados en pantalla.



Tecnologías utilizadas


HTML5


CSS3


JavaScript



Estructura del proyecto
📁 conversor-temperatura│├── index.html├── styles.css├── script.js└── README.md

Funcionamiento
Conversión a Fahrenheit
La fórmula utilizada es:
F=(C×95)+32F = (C \times \frac{9}{5}) + 32F=(C×59​)+32

Conversión a Kelvin
La fórmula utilizada es:
K=C+273.15K = C + 273.15K=C+273.15

Características


Interfaz sencilla y amigable


Diseño responsivo


Validación de entradas


Conversión instantánea


Resultados con decimales usando toFixed(2)



Instalación y uso
1. Clonar el repositorio
git clone https://github.com/usuario/conversor-temperatura.git

2. Entrar a la carpeta del proyecto
cd conversor-temperatura

3. Abrir el archivo index.html
Puedes abrirlo directamente en tu navegador.
O usar una extensión como:


Live Server en Visual Studio Code



Ejemplo de uso
Entrada:
25
Salida:
Grados Kelvin: 298.15Grados Fahrenheit: 77.00

Validación de errores
Si el usuario no ingresa un número válido, el sistema mostrará el mensaje:
Por favor, ingresa un número válido.

Autor
Kaleb
Desarrollador Full-Stack Jr. y Doctor en Ciencias.