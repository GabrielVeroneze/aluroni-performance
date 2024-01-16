import MenuItem from './MenuItem'
import logo from '@/assets/logo.svg'
import styles from './Menu.module.scss'

const Menu = () => {
    const rotas = [
        {
            label: 'Início',
            caminho: '/',
        },
        {
            label: 'Cardápio',
            caminho: '/cardapio',
        },
        {
            label: 'Sobre',
            caminho: '/sobre',
        },
    ]

    return (
        <nav className={styles.menu}>
            <img src={logo} alt="Logo do Aluroni" />
            <ul className={styles.menu__lista}>
                {rotas.map((rota, index) => (
                    <MenuItem key={index} {...rota} />
                ))}
            </ul>
        </nav>
    )
}

export default Menu
