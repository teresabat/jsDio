let nota1 = 6
let nota2 = 5
let nota3 = 4

let calculoNota = (nota1 + nota2 + nota3) / 3
if (calculoNota < 5) {
    console.log('Reprovado')
} else if (calculoNota >= 5 && calculoNota <= 7) {
    console.log('Recuperação')
} else {
    console.log('Aprovado!')
}


/* MENOR Q 5 REPROVAÇÃO
ENTRE 5 E 7 RECUPERAÇÃO
7 A 10 APROVADO */