import { useFiltro } from '@/context/Filtro/useFiltro'
import classNames from 'classnames'
import styles from './Filtros.module.scss'

interface FiltrosProps {
    id: number
    label: string
}

const Filtros = ({ label, id }: FiltrosProps) => {
    const { filtro, selecionarFiltro } = useFiltro()

    return (
        <button
            className={classNames({
                [styles.filtro]: true,
                [styles['filtro--ativo']]: filtro === id,
            })}
            onClick={() => selecionarFiltro(id)}
        >
            {label}
        </button>
    )
}

export default Filtros
