let numTelefono = prompt("Dime tu número de telefono")


let prefijo = telefono.substring(0, 3);

if (numTelefono.startsWith("+34")) {
    alert("Es de España");
} else if (numTelefono.startsWith("+44")) {
    alert("De Reino Unido");
} else if (numTelefono.startsWith("+33")) {
    alert("De Francia");
} else if (numTelefono.startsWith("+49")) {
    alert("Es Alemania");
} else if (numTelefono.startsWith("+39")) {
    alert("Es Italia");
} else {
    alert("Es desconocido");
}