import { createContext, useState } from 'react'

interface BuscaContextType {
    busca: string
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

const defaultValue: BuscaContextType = {
    busca: '',
    setBusca: () => {},
}

export const BuscaContext = createContext<BuscaContextType>(defaultValue)
BuscaContext.displayName = 'Busca'

interface BuscaProviderProps {
    children: React.ReactNode
}

export const BuscaProvider = ({ children }: BuscaProviderProps) => {
    const [busca, setBusca] = useState<string>(defaultValue.busca)

    return (
        <BuscaContext.Provider value={{ busca, setBusca }}>
            {children}
        </BuscaContext.Provider>
    )
}
