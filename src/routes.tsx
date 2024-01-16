import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PratosProvider } from '@/context/Pratos/PratosContext'
import { BuscaProvider } from '@/context/Busca/BuscaContext'
import { FiltroProvider } from '@/context/Filtro/FiltroContext'
import { OrdenarProvider } from '@/context/Ordenar/OrdenarContext'
import Inicio from '@/pages/Inicio'
import Cardapio from '@/pages/Cardapio'
import Sobre from '@/pages/Sobre'
import NotFound from '@/pages/NotFound'
import Prato from '@/pages/Prato'
import Layout from '@/components/Layout'
import Menu from '@/components/Menu'
import Rodape from '@/components/Rodape'

const AppRoutes = () => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route
                    path="/"
                    element={
                        <PratosProvider>
                            <Layout />
                        </PratosProvider>
                    }
                >
                    <Route index element={<Inicio />} />
                    <Route
                        path="cardapio"
                        element={
                            <BuscaProvider>
                                <FiltroProvider>
                                    <OrdenarProvider>
                                        <Cardapio />
                                    </OrdenarProvider>
                                </FiltroProvider>
                            </BuscaProvider>
                        }
                    />
                    <Route path="sobre" element={<Sobre />} />
                </Route>
                <Route
                    path="prato/:id"
                    element={
                        <PratosProvider>
                            <Prato />
                        </PratosProvider>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Rodape />
        </Router>
    )
}

export default AppRoutes
