var precoGasolina = 5.86
var precoEtanol = 3.42
var distanciaKm = 100
var kmPorLitros = 9

/*var precoKmPortLitros = precoGasolina / kmPorLitros
var mediaTotal = precoKmPortLitros * distanciaKm*/
var mediaGasolina = precoGasolina / kmPorLitros * distanciaKm
var mediaEtanol = precoEtanol / kmPorLitros * distanciaKm

console.log(`A média da gasolina vai ser ${mediaGasolina.toFixed(2)} reais, enquanto no etanol vai ser ${mediaEtanol}.`)