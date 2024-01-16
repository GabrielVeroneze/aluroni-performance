import { useNavigate } from 'react-router-dom'
import { ICardapioItem } from '@/interfaces/ICardapioItem'
import styles from './Recomendado.module.scss'

interface RecomendadoProps {
    prato: ICardapioItem
}

const Recomendado = ({ prato }: RecomendadoProps) => {
    const navigate = useNavigate()

    const redirecionarParaDetalhes = (prato: ICardapioItem) => {
        navigate(`/prato/${prato.id}`, { state: { ...prato } })
    }

    return (
        <div className={styles.recomendado}>
            <img
                className={styles.recomendado__imagem}
                src={prato.photo}
                alt={prato.title}
            />
            <button
                className={styles.recomendado__botao}
                onClick={() => redirecionarParaDetalhes(prato)}
            >
                Ver Mais
            </button>
        </div>
    )
}

export default Recomendado
