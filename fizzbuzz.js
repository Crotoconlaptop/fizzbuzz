/*
fizzbuzz

escribir un programa que imprima cada numero del 1 al 100 en una nueva linea 
por cada multiplo de 3, que imprima "fizz" en lugar del numero
por cada multiplo de 5, que imprima "buzz" en lugar del numero
para numeros que sean multiplos de 3 y 5, que imprima "fizzbuzz" en lugar del numero

*/
/*
for (i = 1; i <= 100; i++) {
    let result = "";
    if (i % 3 === 0) {
        result += "fizz";
    }
    if (i % 5 === 0) {
        result += "buzz";
    }
    console.log(result || i);
}

for (i = 1; i <= 100; i++) {
    let result = `${i % 3 ? "": "fizz" }${i % 5 ? "": "buzz" }` ;
    console.log(result || i);
}

for (i = 1; i <= 100; i++) {
    console.log(`${i % 3 ? "": "fizz" }${i % 5 ? "": "buzz" }` || i);
}
*/
for (i = 1; i <= 100; i++) document.write(`${i % 3 ? "": "fizz <br>" }${i % 5 ? "": "buzz <br>" }` || i+"<br>");

