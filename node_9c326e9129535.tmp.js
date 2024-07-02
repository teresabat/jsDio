const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function calculator() {
  const num1 = Number(await askQuestion('Enter the first number: '));
  const operator = await askQuestion('Enter the operator (+, -, *, /): ');
  const num2 = Number(await askQuestion('Enter the second number: '));

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      console.log('Invalid operator');
      rl.close();
      return;
  }

  console.log(`The result is: ${result}`);
  rl.close();
}

calculator();
