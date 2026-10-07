let numero = Number(prompt("Dime un número"));
let esPrimo = true;

if (numero < 2) {
    esPrimo = false;
}

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        esPrimo = false;
    }
}

if (esPrimo) {
    alert("El número es primo");
    console.log("El número es primo");
} else {
    alert("El número no es primo");
    console.log("El número no es primo");
}