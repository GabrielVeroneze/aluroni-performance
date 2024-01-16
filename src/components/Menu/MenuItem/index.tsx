import { Link } from 'react-router-dom'
import styles from './MenuItem.module.scss'

interface MenuItemProps {
    label: string
    caminho: string
}

const MenuItem = ({ label, caminho }: MenuItemProps) => {
    return (
        <li className={styles.item}>
            <Link className={styles.item__link} to={caminho}>
                {label}
            </Link>
        </li>
    )
}

export default MenuItem
