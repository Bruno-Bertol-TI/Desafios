function main() {
    let tabuada = parseInt(prompt('Digite um número para ver a taboada dele mesmo: '));
    gerarTabuada(tabuada);
}

function gerarTabuada(tabuada) {
    for (i = 1; i <=10; i++) {
        console.log(tabuada,' X ', i = tabuada * i);
    }
    return alert('acesse o console!');
}

main();