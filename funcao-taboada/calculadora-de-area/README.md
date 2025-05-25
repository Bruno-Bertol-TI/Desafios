Decidi melhorar após criar calculadora de area apenas de quadrados e retangulos.
Agora, estou criando um loop no escopo global para nunca se encerrar, este loop
irá aguardar uma resposta (quadrado, retangulo, circulo ou triangulo), após a
entrada de dados será comparado a entrada com as condições do if e else, se não
for nenhuma das opções disponiveis e reinicia o loop com a seguinte mensagem de
alerta (Voce digitou uma opcao inexistente, tente novamente). Se for compatival
com as condições o fluxo do código será direcionado diretamente para a entrada
de dados na 'function entradaMedidas', nesta função será processado qual o tipo 
de calculo que a pessoa escolheu no inicio da execução, assim aparecerá o campo
adequado para que o sistema tenha informação suficiente para fazer os calculos.
seguindo o fluxo do sistema, será chamada a função escolhida e será calculada a
area o perimetro ou circunferencia. chegando ao fim coloquei uma operação terná-
ria para alterar valores dinamicamente quando não for perimetro e sim circunfe-
rencia.