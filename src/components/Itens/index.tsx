import { useNavigate } from "react-router-dom"
import { ICardapioItem } from "@/interfaces/ICardapioItem"
import Tags from "@/components/Tags"
import styles from './Itens.module.scss'

interface ItensProps {
    item: ICardapioItem
}

const Itens = ({ item }: ItensProps) => {
    const { id, title, description, photo } = item
    const navigate = useNavigate()

    return (
        <div
            className={styles.item}
            onClick={() => navigate(`/prato/${id}`)}
        >
            <img
                className={styles.item__imagem}
                src={photo}
                alt={title}
            />
            <div className={styles.item__info}>
                <h2 className={styles.item__titulo}>
                    {title}
                </h2>
                <p className={styles.item__descricao}>
                    {description}
                </p>
                <Tags item={item} />
            </div>
        </div>
    )
}

export default Itens