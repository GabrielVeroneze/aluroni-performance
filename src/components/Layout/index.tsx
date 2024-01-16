import { Outlet } from 'react-router-dom'
import Cabecalho from '@/components/Cabecalho'
import stylesCommon from '@/sass/common/EstilosComuns.module.scss'

interface LayoutProps {
    children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <main>
            <Cabecalho />
            <div className={stylesCommon.container}>
                <Outlet />
                {children}
            </div>
        </main>
    )
}

export default Layout
