import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePratos } from '@/context/Pratos/usePratos'
import { ICardapioItem } from '@/interfaces/ICardapioItem'

export const useEncontraPratoDaRota = () => {
    const { id } = useParams()
    const { pratos } = usePratos()

    const [prato, setPrato] = useState<ICardapioItem | undefined>(undefined)

    useEffect(() => {
        setPrato(pratos.find(item => item.id === Number(id)))
    }, [pratos, id])
    
    return {
        prato
    }
}
