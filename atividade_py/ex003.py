'''
Desafios

Crie uma classe chamada ContaBancaria com um construtor que aceita os parâmetros
 titular e saldo. Inicie o atributo ativo como False por padrão. == OK

Na classe ContaBancaria, adicione um método especial __str__ que retorna uma mensagem
 formatada com o titular e o saldo da conta. Crie duas instâncias da classe e imprima
   essas instâncias. == OK

Adicione um método de classe chamado ativar_conta à classe ContaBancaria que define
 o atributo ativo como True. Crie uma instância da classe, chame o método de classe
   e imprima o valor de ativo. == OK 

Refatore a classe ContaBancaria para utilizar a abordagem "pythonica" na criação de
 atributos. Utilize propriedades, se necessário. == OK 

Crie uma instância da classe e imprima o valor da propriedade titular. == OK 

Crie uma classe chamada ClienteBanco com um construtor que aceita 5 atributos.
 Instancie 3 objetos desta classe e atribua valores aos seus atributos através
   do método construtor.

Crie um método de classe para a conta ClienteBanco.
'''
class ClienteBanco:
    def __init__(self, titular, idade, nacionalidade):
       self._titular = titular.title() 
       self._idade = idade 
       self._ativo = False
       self._nacionalidade = nacionalidade.title()
       self._nivel = 0

    def __str__(self):
        return f'| Titular: {self._titular:^25} | Idade: {self._idade:^7} | Status: {self.ativo:^10} | Nacionalidade: {self._nacionalidade:^20} | Nivel Cliente: {self._nivel:^20} |'
    
    @property
    def ativo(self):
        return 'Ativo' if self._ativo else 'Inativo' 

joao_miguel = ClienteBanco('João Miguel', 25, 'brasileiro')
print(joao_miguel)

'''
class ContaBancaria:
    def __init__(self, titular, saldo):
        self._titular = titular.title()
        self._saldo = f'R$ {saldo}'
        self._ativo = False

    def __str__(self):
        return f'| Titular da conta: {self._titular:>25} | Saldo: R$ {self._saldo:>25} | Status da conta: {self.ativo:^10} |'
    
    def alterar_status_conta(self):
        self._ativo = not self._ativo

    @property
    def ativo(self):
        return 'Ativo' if self._ativo else 'Inativo'
    
    @property
    def titular(self):
        return self._titular
    
    @titular.setter
    def titular(self, novo_titular):
        if not str:
            print('Titular Inválido, Digite apenas letras!')
        self._titular = novo_titular.title()
'''

# joao_miguel = ContaBancaria('João Miguel', 1234.56)
# carlos_antonio = ContaBancaria('Carlos Antonio', 1234.56)
# jose_carlos = ContaBancaria('José Carlhos', 12345.67)
# carlos_antonio.alterar_status_conta()
# joao_miguel.alterar_status_conta()
# jose_carlos.alterar_status_conta()
# jose_carlos.titular = 'José Carlos'
# print(jose_carlos)
# print(joao_miguel)
# print(carlos_antonio)
