import { useNavigate } from 'react-router-dom'
import styles from './Voltar.module.scss'

const Voltar = () => {
    const navigate = useNavigate()

    return (
        <button
            className={styles.botao}
            onClick={() => navigate(-1)}
        >
            &lt; Voltar
        </button>
    )
}

export default Voltar
