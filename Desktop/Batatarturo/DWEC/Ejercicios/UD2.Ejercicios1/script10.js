let numeroAleatorio;

numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let respuesta = prompt("Dime el número Aleatorio")

if(respuesta === numeroAleatorio) {
    alert("Has acertado")
} else {
    alert("Ese no era el número")
}

alert("El número correcto era: " + numeroAleatorio);