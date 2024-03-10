
let num1 = 0;
let num2 = 1;
let num3 = 0;
let fibonacci = [num1, num2];

for (let i = 1; i <= 28; i++) {
    num3 = num1 + num2;
    fibonacci.push(num3);
    num1 = num2;
    num2 = num3;
}

console.log("Sequência de Fibonacci:", fibonacci);

function estanaFibonacci(number) {
    return fibonacci.includes(number);
}

const numeroInformado = parseInt(prompt("digite o número e descubra se é da fibonacci ou não"));

if (estanaFibonacci(numeroInformado)) {
    alert(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
    alert(numeroInformado + " não pertence à sequência de Fibonacci.");
}
;