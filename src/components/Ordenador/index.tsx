import { useContext, useState } from 'react'
import { OrdenarContext } from '@/context/Ordenar/OrdenarContext'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import classNames from 'classnames'
import Opcao from './Opcao'
import opcoes from '@/json/opcoes.json'
import styles from './Ordenador.module.scss'

const Ordenador = () => {
    const [aberto, setAberto] = useState<boolean>(false)
    const { ordenador } = useContext(OrdenarContext)

    const nomeOrdenador = opcoes.find(opcao => opcao.value === ordenador)?.nome

    return (
        <button
            className={classNames({
                [styles.ordenador]: true,
                [styles['ordenador--ativo']]: ordenador !== ''
            })}
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
        >
            <span>{nomeOrdenador || 'Ordenar Por'}</span>
            {aberto ? (
                <MdKeyboardArrowUp size={20} />
            ) : (
                <MdKeyboardArrowDown size={20} />
            )}
            <div
                className={classNames({
                    [styles.ordenador__options]: true,
                    [styles['ordenador__options--ativo']]: aberto
                })}
            >
                {opcoes.map(opcao => (
                    <Opcao key={opcao.value} {...opcao} />
                ))}
            </div>
        </button>
    )
}

export default Ordenador
