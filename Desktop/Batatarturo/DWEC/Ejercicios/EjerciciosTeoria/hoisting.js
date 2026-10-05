//EJEMPLO BÁSICO DE HOISTING CON VAR
console.log(a);
var a = 5;
console.log(a);

//EJEMPLO CON LET

let b =  10;
console.log(b);


//CON VAR EN BUCLES ANIDADOS
for(var i= 0; i < 3; i++) {
    for(var i = 0; i < 2; i++) {
    console.log("VAR i dentro del bucle interno", i)
    }
}

for(let j= 0; j < 3; j++) {
    for(let j = 0; j < 2; j++) {
    console.log("LET j dentro del bucle interno", j)
    }
}