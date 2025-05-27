'''
Desafios

Crie uma classe chamada ContaBancaria com um construtor que aceita os parâmetros
 titular e saldo. Inicie o atributo ativo como False por padrão. == OK

Na classe ContaBancaria, adicione um método especial __str__ que retorna uma mensagem
 formatada com o titular e o saldo da conta. Crie duas instâncias da classe e imprima
   essas instâncias.

Adicione um método de classe chamado ativar_conta à classe ContaBancaria que define
 o atributo ativo como True. Crie uma instância da classe, chame o método de classe
   e imprima o valor de ativo.

Refatore a classe ContaBancaria para utilizar a abordagem "pythonica" na criação de
 atributos. Utilize propriedades, se necessário.

Crie uma instância da classe e imprima o valor da propriedade titular.

Crie uma classe chamada ClienteBanco com um construtor que aceita 5 atributos.
 Instancie 3 objetos desta classe e atribua valores aos seus atributos através
   do método construtor.

Crie um método de classe para a conta ClienteBanco.
'''

class ContaBancario():
    def __init__(self, titular, saldo):
        self._titular = titular.title()
        self._saldo = f'R$ {saldo}'
        self._ativo = False

    def __str__(self):
        print('Titular da conta: ', self._titular, 'Saldo: ', self._saldo)

joao_miguel = ContaBancario('João Miguel', 1234.56)