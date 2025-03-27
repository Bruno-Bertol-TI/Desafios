// Crie uma função que mostre na tela a área
//  e o perímetro de uma sala retangular, utilizando 
// altura e largura que serão dadas como parâmetro.


function calc_area(altura, largura) {
    area = altura * largura
    perimetro = (altura*2) + (largura*2)
}

alt = parseFloat(prompt('Digite a altura que deseja calcular: '))
lar = parseFloat(prompt('Digite a largura que deseja calcular: '))
calc_area(alt, lar)
console.log(area, perimetro)
alert(`A area é ${area}m² e o perimetro é ${perimetro}m de perimetro`)