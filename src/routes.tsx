import { lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from '@/pages/Inicio'
import Sobre from '@/pages/Sobre'
import NotFound from '@/pages/NotFound'
import Prato from '@/pages/Prato'
import Layout from '@/components/Layout'
import Menu from '@/components/Menu'
import Rodape from '@/components/Rodape'

const Cardapio = lazy(() => import('@/pages/Cardapio'))

const AppRoutes = () => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Inicio />} />
                    <Route path="cardapio" element={<Cardapio />} />
                    <Route path="sobre" element={<Sobre />} />
                </Route>
                <Route path="prato/:id" element={<Prato />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Rodape />
        </Router>
    )
}

export default AppRoutes
