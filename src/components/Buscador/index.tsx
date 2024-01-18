import { memo, useContext, useMemo } from 'react'
import { BuscaContext } from '@/context/Busca/BuscaContext'
import { CgSearch } from 'react-icons/cg'
import styles from './Buscador.module.scss'

const Buscador = memo(() => {
    const { busca, setBusca } = useContext(BuscaContext)

    const icone = useMemo(() => <CgSearch size={20} color="#4C4D5E" />, [])

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                placeholder='Buscar'
                value={busca}
                onChange={evento => setBusca(evento.target.value)}
            />
            {icone}
        </div>
    )
})

export default Buscador
