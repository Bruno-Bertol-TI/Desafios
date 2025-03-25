// Crie uma função que calcule o valor 
// do fatorial de um número passado como parâmetro.

function calculateFactorial(number) {
    let factoryResult = 1;
    if (number <= 0) return;
    while (number >= 1) {
        factoryResult *= number;
        number--;
    }
    return factoryResult;
}

console.log(calculateFactorial(5));