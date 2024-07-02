const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function calculator() {
    let num1 = await askQuestion('Digite o primeiro numero: ');
    let op = await askQuestion('Entre com o operador (+, -, *, /)');
    let num2 = await askQuestion('Digite o segundo numero: ');

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        default:
            return;
    }
    console.log(`O resultado é ${result}`)
    rl.close();
}
calculator();