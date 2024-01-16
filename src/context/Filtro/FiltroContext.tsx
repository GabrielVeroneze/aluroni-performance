import { createContext, useState } from 'react'

interface FiltroContextType {
    filtro: number | null
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

const defaultValue = {
    filtro: null,
    setFiltro: () => {},
}

export const FiltroContext = createContext<FiltroContextType>(defaultValue)
FiltroContext.displayName = 'Filtro'

interface FiltroProviderProps {
    children: React.ReactNode
}

export const FiltroProvider = ({ children }: FiltroProviderProps) => {
    const [filtro, setFiltro] = useState<number | null>(defaultValue.filtro)

    return (
        <FiltroContext.Provider value={{ filtro, setFiltro }}>
            {children}
        </FiltroContext.Provider>
    )
}
