const btn = document.getElementById('btn');

function carregar() {


    let valortotal = document.getElementById('valortotal');

    let precoCombustivel = Number(document.getElementById('precoCombustivel').value);
    let KmPorLitros = Number(document.getElementById('KmPorLitros').value);
    let distanciaKm = Number(document.getElementById('distanciaKm').value);

    let conta = (precoCombustivel / KmPorLitros) * distanciaKm;
    let mediaCombustivel = distanciaKm / KmPorLitros
    valortotal.innerHTML = `Você vai gastar ${conta.toFixed(2)} reais, com uma média de ${mediaCombustivel.toFixed(2)} Km/l`;

}
