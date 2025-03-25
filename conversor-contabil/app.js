// Crie uma função que converte um valor em dólar,
//  passado como parâmetro, e retorna o valor equivalente em reais.
//  Para isso, considere a cotação do dólar igual a R$4,80.

let cotacao = 4.80;
let quantidadeDolar = 100;

function conversor(qtdDolar, cotacao) {
    if (qtdDolar <= 0) return 'O saldo é negativo';
    let qtdReais = qtdDolar * cotacao;
    return qtdReais;
}

console.log(conversor(quantidadeDolar, cotacao));