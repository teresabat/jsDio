let altura = 1.70
let peso = 170.5
let calcImc = peso / (altura * altura)

if (calcImc < 16) {
    console.log(`O seu imc é ${calcImc.toFixed(2)} e você tem magreza grave.`)
} else if (calcImc >= 16 && calcImc <= 18.5) {
    console.log(`O seu imc é ${calcImc.toFixed(2)} e você tem magreza leve.`)
} else if (calcImc >= 18.6 && calcImc <= 24.9) {
    console.log(`O seu imc é ${calcImc.toFixed(2)} e você tem peso ideal.`)
} else if (calcImc >= 25 && calcImc <= 29.9) {
    console.log(`O seu imc é ${calcImc.toFixed(2)} e você tem sobrepeso.`)
} else if (calcImc >= 30 && calcImc <= 35) {
    console.log(`O seu imc é ${calcImc.toFixed(2)} e você tem obesidade grau 1.`)
}
else if (calcImc >= 36 && calcImc <= 40) {
    console.log(`O seu imc é ${calcImc.toFixed(2)} e você tem obesidade grau 2 ou severa.`)
}
else if (calcImc > 40) {
    console.log(`O seu imc é ${calcImc.toFixed(2)} e você tem obesidade grau 3 ou mórbida.`)
}