import casa from '@/assets/sobre/casa.png'
import massa1 from '@/assets/sobre/massa1.png'
import massa2 from '@/assets/sobre/massa2.png'
import styles from './Sobre.module.scss'
import stylesCommon from '@/sass/common/EstilosComuns.module.scss'

const Sobre = () => {
    const imagens = [massa1, massa2]

    return (
        <section>
            <h3 className={stylesCommon.titulo}>Sobre</h3>
            <div className={styles.sobre}>
                <img
                    className={styles.sobre__imagem}
                    src={casa}
                    alt="Casa Aluroni"
                />
                <p className={styles.sobre__paragrafo}>
                    Nós do Aluroni oferecemos a vocês, nossos queridos clientes,
                    a Massa Italiana Caseira mais saborosa e sofisticada de São
                    Paulo! Prezamos pelos ingredientes tradicionais da culinária
                    Italiana, frescos e de excelente qualidade para que sua
                    experiência seja ainda mais intensa!
                </p>
                <p className={styles.sobre__paragrafo}>
                    Também possuímos um cardápio de carnes com muitas opções de
                    acordo com o seu gosto!
                </p>
                <p className={styles.sobre__paragrafo}>
                    Para acompanhar as massas italianas, Aluroni possui uma
                    reserva de vinhos especiais, que harmonizam perfeitamente
                    com o seu prato, seja carne ou massa!
                </p>
            </div>
            <div className={styles.imagens}>
                {imagens.map((imagem, index) => (
                    <img
                        key={index}
                        className={styles.imagens__imagem}
                        src={imagem}
                        alt="Imagem de massa"
                    />
                ))}
            </div>
        </section>
    )
}

export default Sobre
