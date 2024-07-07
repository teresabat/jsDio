const btn = document.getElementById('btn')

// function calcular() {
btn.addEventListener('click', () => {
    let valorGasolina = Number(document.getElementById('valorGasolina').value);
    let distanciaKm = Number(document.getElementById('distanciaKm').value);
    let autonomia = Number(document.getElementById('autonomia').value);
    let resultado = document.getElementById('resultado')

    let mediaCombustivel = valorGasolina / autonomia
    let valorTotal = mediaCombustivel * distanciaKm

    resultado.innerHTML = `O valor da gasolina é ${valorGasolina}, e a média é de ${mediaCombustivel.toFixed(2)} por Km, totalizando ${valorTotal.toFixed(2)} reais!`
});