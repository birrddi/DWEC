let edad = prompt("Dime tu edad");

if (isNaN(edad)) {
    document.write("Eso no es un número");
} else if (edad < 18) {
    document.write("Eres menor de edad");
} else if (edad < 65) {
    document.write("Eres adulto");
} else {
    document.write("Eres un jubileta");
}