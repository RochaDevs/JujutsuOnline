import { NavLink } from "react-router-dom";
import styles from './NavBarAdm.module.scss'

interface INavBarAdm {
    titulo1: string
    titulo2: string
    titulo3: string
}

function NavBarAdm({titulo1, titulo2, titulo3} :INavBarAdm) {
    return (
        <nav className={styles.navStyled}>
            <NavLink>{titulo1}</NavLink>
            <NavLink>{titulo2}</NavLink>
            <NavLink>{titulo3}</NavLink>
        </nav>
    )
}

export default NavBarAdm