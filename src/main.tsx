import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import '@/sass/_global.scss'
import { PratosProvider } from '@/context/Pratos/PratosContext'
import { BuscaProvider } from '@/context/Busca/BuscaContext'
import { FiltroProvider } from '@/context/Filtro/FiltroContext'
import { OrdenarProvider } from '@/context/Ordenar/OrdenarContext'
import AppRoutes from '@/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PratosProvider>
            <BuscaProvider>
                <FiltroProvider>
                    <OrdenarProvider>
                        <AppRoutes />
                    </OrdenarProvider>
                </FiltroProvider>
            </BuscaProvider>
        </PratosProvider>
    </React.StrictMode>
)
