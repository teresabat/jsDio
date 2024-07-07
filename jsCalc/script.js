// const btn = document.getElementById('btn')

// btn.addEventListener('click', () => {
//     let num1 = Number(document.getElementById('num1').value)
//     let num2 = Number(document.getElementById('num2').value)
//     let calculo = num1 + num2
//     let res = document.getElementById('pResult')

//     res.innerHTML = `A soma entre ${num1} e ${num2} é: ${calculo}`
// })

// const btn = document.getElementById('btn')
// function calcular() {
//     let num1 = Number(document.getElementById('num1').value);
//     let num2 = Number(document.getElementById('num2').value);
//     let res = document.getElementById('pResult');
//     let calculo = num1 + num2;

//     res.innerHTML = `A soma entre ${num1} e ${num2} é: ${calculo}`;
// }
function soma() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let resultado = document.getElementById('pResult');
    let soma = num1 + num2;
    resultado.innerHTML = `A subtração entre ${num1} e ${num2} é: ${soma}`
}

function sub() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let resultado = document.getElementById('pResult');
    let sub = num1 - num2;
    resultado.innerHTML = `A soma entre ${num1} e ${num2} é: ${sub}`
}

function multi() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let resultado = document.getElementById('pResult');
    let multi = num1 * num2;
    resultado.innerHTML = `A multiplicação entre ${num1} e ${num2} é: ${multi}`

}

function divi() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let resultado = document.getElementById('pResult');
    let divi = num1 / num2;
    resultado.innerHTML = `A divisão entre ${num1} e ${num2} é: ${divi}`
}