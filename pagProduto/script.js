let metodoPagamento = 'Crédito'
let precoProduto = 159.80

if (metodoPagamento == 'Débito') {
    let descontoDebito = precoProduto * (10 / 100)
    let valorDebito = precoProduto - descontoDebito
    console.log(`O preço do produto é ${precoProduto.toFixed(2)}, e você pagará apenas ${valorDebito.toFixed(2)} com 10% de desconto!`)

} else if (metodoPagamento == 'Pix') {
    let descontoPix = precoProduto * (15 / 100)
    let valorPix = precoProduto - descontoPix
    console.log(`O preço do produto é ${precoProduto.toFixed(2)}, e você pagará apenas ${valorPix.toFixed(2)} com 15% de desconto!`)
} else {
    let cartaoCredito = precoProduto * (20 / 100)
    let valorCredito = precoProduto + cartaoCredito
    console.log(`O preço do produto é ${precoProduto.toFixed(2)}, e você pagará apenas ${valorCredito.toFixed(2)} com 20% de juros!`)
}