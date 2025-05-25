my_dictionary = {}

for chave in range(1, 26):
    my_dictionary[chave] = 1 + 2 ** 2

print(my_dictionary)

pesquisar_chaves = int(input('Digite a chave que deseja encontrar: '))
if pesquisar_chaves in my_dictionary:
    print('Essa chave existe.')