import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from '@/components/Menu'
import Rodape from '@/components/Rodape'

const Inicio = lazy(() => import('@/pages/Inicio'))
const Cardapio = lazy(() => import('@/pages/Cardapio'))
const Sobre = lazy(() => import('@/pages/Sobre'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const Prato = lazy(() => import('@/pages/Prato'))
const Layout = lazy(() => import('@/components/Layout'))

const AppRoutes = () => {
    return (
        <Router>
            <Menu />
            <Suspense fallback={<p>Carregando...</p>}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Inicio />} />
                        <Route path="cardapio" element={<Cardapio />} />
                        <Route path="sobre" element={<Sobre />} />
                    </Route>
                    <Route path="prato/:id" element={<Prato />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
            <Rodape />
        </Router>
    )
}

export default AppRoutes
