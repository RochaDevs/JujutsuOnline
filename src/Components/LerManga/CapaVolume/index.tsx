import { NavLink } from "react-router-dom"
import styles from './CapaVolume.module.scss'

interface ICapaVolume {
    titulo: string
    descricao: string
    url: string
    volume: string
}

function CapaVolume({ titulo, descricao, url, volume } :ICapaVolume) {

    return (
        <div className={styles.divStyled}>
            <NavLink className={styles.navLinkStyled} to={`volumes/${volume}`}>
                <img className={styles.imgStyled} src={url} alt={titulo} />
            </NavLink>
            <h2 className={styles.h2Styled}>{titulo}</h2>
            <h2 className={styles.h2Styled}>{descricao}</h2>
        </div>
    )
}

export default CapaVolume