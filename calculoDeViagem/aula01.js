


const precoCombustivel = 5.79
const KmPorLitros = 12
const distanciaKm = 1580

let mediaCombusKm = distanciaKm / KmPorLitros
let valorTotal = precoCombustivel / KmPorLitros * distanciaKm

//const litrosConsumidos = distanciaKm / KmPorLitros
//const valorGasto = litrosConsumidos * precoCombustivel

console.log(`Você vai gastar ${valorTotal.toFixed(2)} reais de combustível, com uma média de ${mediaCombusKm.toFixed(2)} por litro.`)

//console.log(valorGasto)