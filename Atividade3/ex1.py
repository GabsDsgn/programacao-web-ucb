def elementos_em_comum(listas):
    if not listas:
        return []

    conjuntos = [set(map(int, lista)) for lista in listas]
    elementos_comuns = set.intersection(*conjuntos)
    return sorted(list(elementos_comuns))


def main():
    num_listas = int(input())
    listas = []
    for _ in range(num_listas):
        lista = input().split()
        listas.append(lista)

    elementos_comuns = elementos_em_comum(listas)
    print(elementos_comuns)


if __name__ == "__main__":
    main()
