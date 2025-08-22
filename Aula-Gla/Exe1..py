from statistics import median, mean

maximo = 15


def limite(prompt, limit):
    while True:
        try:
            value = int(input(prompt))
            if 1 <= value <= limit:
                return value
            else:
                print(f"Digite um valor de 1 até {limit}.")
        except ValueError:
            print("Entrada inválida. Por favor, digite um número inteiro.")


def coletar():
    num_usuarios = limite(f"Usaremos quantos usuários nessa aplicação (1 a {maximo})? ", maximo)
    alturas_mulheres = []
    alturas_homens = []
    alt_cadastradas = []
    gen_cadastrados = []
    nomes_cadastrados = []

    for i in range(num_usuarios):
        print(f'\n--- Cadastro do Usuário {i + 1} ---')


        nome = input(f"Insira seu nome: ")
        nomes_cadastrados.append(nome)

        while True:
            genero = input(f"Insira seu gênero (M/F): ").upper()
            if genero in ["M", "F"]:
                gen_cadastrados.append(genero)
                break
            else:
                print("Gênero inválido. Por favor, digite 'M' para masculino ou 'F' para feminino.")

        while True:
            try:
                altura = float(input(f"Insira sua altura em metros (ex: 1.75): "))
                if genero == "M":
                    alturas_homens.append(altura)
                elif genero == "F":
                    alturas_mulheres.append(altura)
                alt_cadastradas.append(altura)
                break
            except ValueError:
                print("Entrada inválida. Por favor, digite um número (altura).")



    print("\n--- Estatísticas de Altura ---")
    altu(alt_cadastradas, alturas_homens, alturas_mulheres)

    print("\n--- Estatísticas de Gênero ---")
    gen(gen_cadastrados)


def altu(alt_cadastradas, alturas_homens, alturas_mulheres):
    if alt_cadastradas:
        soma = sum(alt_cadastradas)
        maior = max(alt_cadastradas)
        menor = min(alt_cadastradas)
        med = median(alt_cadastradas)
        media = mean(alt_cadastradas)
        print(f"A soma das alturas é: {soma:.2f}m")
        print(f"A maior altura cadastrada foi: {maior:.2f}m")
        print(f"A menor altura cadastrada foi: {menor:.2f}m")
        print(f"A mediana das alturas foi: {med:.2f}m")
        print(f"A média das alturas foi: {media:.2f}m")

        if alturas_homens:
            print(f"Média da altura dos homens: {mean(alturas_homens):.2f}m")
        if alturas_mulheres:
            print(f"Média da altura das mulheres: {mean(alturas_mulheres):.2f}m")


def gen(gen_cadastrados):
    total_homens = gen_cadastrados.count("M")
    total_mulheres = gen_cadastrados.count("F")

    print(f"Número de homens cadastrados: {total_homens}")
    print(f"Número de mulheres cadastradas: {total_mulheres}")


coletar()