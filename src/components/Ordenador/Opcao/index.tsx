import { useContext } from 'react'
import { OrdenarContext } from '@/context/Ordenar/OrdenarContext'
import styles from './Opcao.module.scss'

interface OpcaoProps {
    nome: string
    value: string
}

const Opcao = ({ nome, value }: OpcaoProps) => {
    const { setOrdenador } = useContext(OrdenarContext)

    return (
        <div className={styles.option} onClick={() => setOrdenador(value)}>
            {nome}
        </div>
    )
}

export default Opcao
