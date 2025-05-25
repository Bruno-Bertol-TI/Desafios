frase = """
Python é uma linguagem de programação muito popular. Muitas pessoas escolhem Python para aprender a programar porque Python é simples e poderoso.
Com Python, você pode desenvolver aplicações web, automações, análises de dados e muito mais. A comunidade Python é muito ativa, 
e existem muitos recursos para quem quer aprender Python. A sintaxe de Python é clara, o que facilita o aprendizado para iniciantes.
Além disso, Python possui uma vasta biblioteca padrão, que ajuda em diversas tarefas. Muitas empresas utilizam Python em seus projetos.
Python é uma ótima escolha para quem deseja entrar no mundo da programação.
""" * 5

palavras = frase.lower().replace('\n', ' ').split()

frequencia = {}

for palavra in palavras:
    frequencia[palavra] = frequencia.get(palavra, 0) + 1

for palavra, contagem in frequencia.items():
    print(f"{palavra}: {contagem}")