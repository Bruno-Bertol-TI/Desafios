dictionary = {
    'name': 'Bruno',
    'lastname': 'Bertol',
    'age': 21,
    'adress': {
        'street': 'Rua coronel carlos bardelli',
        'number': 160,
        'postal code': '85867-618',      
    }
}
profession_field = input('Digite sua profissão: ')
dictionary['profession'] = profession_field

atualizar_dados_idade = int(input('Digite sua idade: '))
dictionary['age']  = atualizar_dados_idade

del dictionary['lastname']

print(dictionary)