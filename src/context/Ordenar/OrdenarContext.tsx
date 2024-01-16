import { createContext, useState } from 'react'

interface OrdenarContextType {
    ordenador: string
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

const defaultValue: OrdenarContextType = {
    ordenador: '',
    setOrdenador: () => {},
}

export const OrdenarContext = createContext<OrdenarContextType>(defaultValue)
OrdenarContext.displayName = 'Ordenar'

interface OrdenarProviderProps {
    children: React.ReactNode
}

export const OrdenarProvider = ({ children }: OrdenarProviderProps) => {
    const [ordenador, setOrdenador] = useState<string>(defaultValue.ordenador)

    return (
        <OrdenarContext.Provider value={{ ordenador, setOrdenador }}>
            {children}
        </OrdenarContext.Provider>
    )
}
