import logo from '@/assets/logo.svg'
import styles from './Rodape.module.scss'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <img src={logo} alt="Logo do Aluroni" />
        </footer>
    )
}

export default Rodape
