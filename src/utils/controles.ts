import { ICardapioItem } from '@/interfaces/ICardapioItem'

export const verificaBusca = (title: string, busca: string) => {
    const regex = new RegExp(busca, 'i')
    return regex.test(title)
}

export const verificaFiltro = (id: number, filtro: number | null) => {
    if (filtro !== null) {
        return filtro === id
    }
    return true
}

export const ordenar = (novaLista: ICardapioItem[], ordenador: string) => {
    switch (ordenador) {
        case 'porcao':
            return novaLista.sort((a, b) => a.size - b.size)
        case 'qtd_pessoas':
            return novaLista.sort((a, b) => a.serving - b.serving)
        case 'preco':
            return novaLista.sort((a, b) => a.price - b.price)
        default:
            return novaLista
    }
}
