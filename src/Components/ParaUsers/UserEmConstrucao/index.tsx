import ijichi from '../../../../public/Ijichi.png'
import styles from './EmConstrucao.module.scss'

export default function EmConstrucao() {
    return (
        <div className={styles.divStyled}>
            <div className={styles.divBlockStyled}>
                <h1 className={styles.h1Styled}>
                    Meu caro aprendiz de feitiçeiro, essa página está em construção! Use essa impaciência para fortalecer sua energia amaldiçoada!
                </h1>
                <img className={styles.imgStyled} src={ijichi} alt="Ijichi desenvolvendo" />
            </div>
        </div>
    )
}