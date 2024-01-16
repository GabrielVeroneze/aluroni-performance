import { useContext, useEffect, useState } from 'react'
import { usePratos } from '@/context/Pratos/usePratos'
import { useFiltro } from '@/context/Filtro/useFiltro'
import { BuscaContext } from '@/context/Busca/BuscaContext'
import { OrdenarContext } from '@/context/Ordenar/OrdenarContext'
import { ordenar, verificaBusca, verificaFiltro } from '@/utils/controles'
import { ICardapioItem } from '@/interfaces/ICardapioItem'

export const useControles = () => {
    const { pratos } = usePratos()
    const { filtro } = useFiltro()
    const { busca } = useContext(BuscaContext)
    const { ordenador } = useContext(OrdenarContext)

    const [pratosManipulados, setPratosManipulados] = useState<ICardapioItem[]>([])

    useEffect(() => {
        const novaLista = pratos.filter(prato =>
            verificaBusca(prato.title, busca) &&
            verificaFiltro(prato.category.id, filtro)
        )

        setPratosManipulados(ordenar(novaLista, ordenador))
    }, [pratos, busca, filtro, ordenador])

    return {
        pratosManipulados
    }
}
