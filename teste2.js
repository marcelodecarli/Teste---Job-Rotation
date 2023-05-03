//testado no site - https://jsbin.com/wirugaximo/edit?js,console -

function fibonacci(n) {
    if (n < 0) {
        return 'Inválido';
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function pertenceFibonacci(n) {
    let i = 0;
    while (fibonacci(i) <= n) {
        if (fibonacci(i) === n) {
            return true;
        }
        i++;
    }
    return false;
}

const numero = parseInt(prompt("Digite um número inteiro: "));
if (pertenceFibonacci(numero)) {
    alert(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    alert(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
