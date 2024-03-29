import { lazy } from 'react'
import { useEncontraPratoDaRota } from '@/hooks/useEncontraPratoDaRota'
import Voltar from '@/components/Voltar'
import styles from './Prato.module.scss'

const NotFound = lazy(() => import('@/pages/NotFound'))
const Layout = lazy(() => import('@/components/Layout'))
const Tags = lazy(() => import('@/components/Tags'))

const Prato = () => {
    const { prato } = useEncontraPratoDaRota()

    if (!prato) {
        return <NotFound />
    }
    
    return (
        <Layout>
            <Voltar />
            <section className={styles.prato}>
                <h1 className={styles.prato__titulo}>
                    {prato.title}
                </h1>
                <img
                    className={styles.prato__imagem}
                    src={prato.photo}
                    alt={prato.title}
                />
                <div className={styles.prato__conteudo}>
                    <p className={styles.prato__descricao}>
                        {prato.description}
                    </p>
                    <Tags item={prato}/>
                </div>
            </section>
        </Layout>
    )
}

export default Prato