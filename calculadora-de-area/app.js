while (loop == true) {
    formas = prompt('Escolha a forma do local ou objeto que deseja calcular (circulo, triangulo, quadrado ou retangulo): ').toLowerCase();

    if (formas == 'triangulo') {
        entradaMedidas();
        calcTriangulo();
    } else {
        if (formas == 'circulo') {
            entradaMedidas();
            calcCirculo();
        }
        if (formas == 'quadrado' || formas == 'retangulo') {
            entradaMedidas();
            calcQuadradoRetangulo();
        }
        alert('Voce digitou uma opcao inexistente, tente novamente');
    }
}

function entradaMedidas(formas) {
    msgPrompt = 'Digite o valor da(o)';
    if (formas == 'triangulo') {
        base = prompt(`${msgPrompt} Base: `);
        altura = prompt(`${msgPrompt} altura do ${formas}: `);
        a = prompt(`${msgPrompt} lado A do ${formas}: `);
        b = prompt(`${msgPrompt} lado B do ${formas}: `);
    }
    
    if (formas == 'circulo') {
        raio = prompt(`${msgPrompt} Raio: `);
    }

    if (formas == 'quadrado' || formas == 'retangulo') {
        altura = prompt(`${msgPrompt} altura do ${formas}: `);
        largura = prompt(`${msgPrompt} largura do ${formas}: `);
    }

    base, altura, a, b, raio, largura = parseFloat(base, altura, a, b, raio, largura);
}

function calcQuadradoRetangulo(altura, largura) {
    area = altura * largura;
    perimetro = (altura*2) + (largura*2);
}

function calcCirculo(raio) {
    area = 3.14 * raio**2;
    circunferencia = 2 * 3.14 * raio;
}

entradaMedidas(formas);
calcCirculo(raio);
calcQuadradoRetangulo(alt, dimensao);
alternativaPerimetro = formas == 'circulo' ? circunferencia : perimetro;
alert(`A area é ${area}m e o perimetro é ${alternativaPerimetro}m de perimetro`);
