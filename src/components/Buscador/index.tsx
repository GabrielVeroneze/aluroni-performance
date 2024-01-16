import { useContext } from 'react'
import { BuscaContext } from '@/context/Busca/BuscaContext'
import { CgSearch } from 'react-icons/cg'
import styles from './Buscador.module.scss'

const Buscador = () => {
    const { busca, setBusca } = useContext(BuscaContext)

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                placeholder='Buscar'
                value={busca}
                onChange={evento => setBusca(evento.target.value)}
            />
            <CgSearch size={20} color="#4C4D5E" />
        </div>
    )
}

export default Buscador
