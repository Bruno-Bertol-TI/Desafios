let userName = prompt('Digite seu nome aqui: ');
let altura = parseFloat(prompt('Digite sua altura em metros (ex: 1.75): '));
let peso = parseFloat(prompt('Digite seu peso em quilogramas (ex: 70): '));

function calcularIMC(altura, peso) {
    let iMC = peso / (altura * altura);
    return iMC;
}

function calculandoClassificacao(iMC) {
    if (iMC < 18.5) return 'Magreza';
    if (iMC >= 18.5 && iMC <= 24.9) return 'Normal';
    if (iMC >= 25 && iMC <= 29.9) return 'Sobrepeso';
    if (iMC >= 30 && iMC <= 34.9) return 'Obesidade Grau I';
    if (iMC >= 35 && iMC <= 39.9) return 'Obesidade Grau II';
    if (iMC >= 40) return 'Obesidade Grau III';
    return 'Não classificado';
}

function resultadoIMC(user, iMC, iMCClassificado) {
    if (iMCClassificado) {
        alert(`Olá, ${user}! Seu IMC é ${iMC.toFixed(2)} e você está classificado como: ${iMCClassificado}.`);
    } else {
        alert('Tente novamente!');
    }
}

let iMC = calcularIMC(altura, peso);
let classificacao = calculandoClassificacao(iMC);
resultadoIMC(userName, iMC, classificacao);
