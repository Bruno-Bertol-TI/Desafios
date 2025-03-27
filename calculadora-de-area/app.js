function main() {
    let loop = true;

    while (loop) {
        let formas = escolherFuncao();

        if (formas === 'triangulo') {
            entradaMedidas(formas);
            let { area, perimetro } = calcTriangulo(base, altura, a, b);
            exibirResposta(area, perimetro, 'perímetro');
        } else if (formas === 'circulo') {
            entradaMedidas(formas);
            let { area, circunferencia } = calcCirculo(raio);
            exibirResposta(area, circunferencia, 'circunferência');
        } else if (formas === 'quadrado' || formas === 'retangulo') {
            entradaMedidas(formas);
            let { area, perimetro } = calcQuadradoRetangulo(altura, largura);
            exibirResposta(area, perimetro, 'perímetro');
        } else {
            alert('Você digitou uma opção inexistente, tente novamente');
            continue;
        }
    }
}

function escolherFuncao() {
    return prompt('Escolha a forma do local ou objeto que deseja calcular (circulo, triangulo, quadrado ou retangulo): ');
}

function entradaMedidas(formas) {
    msgPrompt = 'Digite o valor da(o)';

    if (formas === 'triangulo') {
        base = parseFloat(prompt(`${msgPrompt} Base:`));
        altura = parseFloat(prompt(`${msgPrompt} Altura do ${formas}:`));
        a = parseFloat(prompt(`${msgPrompt} Lado A do ${formas}:`));
        b = parseFloat(prompt(`${msgPrompt} Lado B do ${formas}:`));
    } else if (formas === 'circulo') {
        raio = parseFloat(prompt(`${msgPrompt} Raio:`));
    } else if (formas === 'quadrado' || formas === 'retangulo') {
        altura = parseFloat(prompt(`${msgPrompt} Altura do ${formas}:`));
        largura = parseFloat(prompt(`${msgPrompt} Largura do ${formas}:`));
    }
}

function calcQuadradoRetangulo(altura, largura) {
    let area = altura * largura;
    let perimetro = (altura*2) + (largura*2);
    return {area, perimetro};
}

function calcCirculo(raio) {
    let area = 3.14 * raio**2;
    let circunferencia = 2 * 3.14 * raio;
    return {area, circunferencia};
}

function calcTriangulo(base, altura, a, b) {
    let area = (base * altura) / 2;
    let perimetro = a + b + base;
    return {area, perimetro};
}

function exibirResposta(area, valorPerimetro, tipoPerimetro) {
    alert(`A área é ${area.toFixed(2)}m e o ${tipoPerimetro} é ${valorPerimetro.toFixed(2)}m`);
}

main();
