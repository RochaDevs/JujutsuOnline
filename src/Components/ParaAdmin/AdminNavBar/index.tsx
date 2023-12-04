import { NavLink } from "react-router-dom";
import styles from './NavBarAdm.module.scss'
import SimpleMenu from "../../ParaUsers/UserNavBar/SimpleMenu";

interface INavBarAdm {
    titulo1: string
    titulo2: string
    titulo3: string
}

function NavBarAdm({ titulo1, titulo2, titulo3 }: INavBarAdm) {
    return (
        <nav className={styles.navStyled}>
            <div className={styles.saudacaoStyled}>
                <h1>Olá, <span>bom dia</span> <span>admin_Matheus</span></h1>
            </div>
            <div className={styles.linksStyled}>
                <NavLink to={'/admin'}>{titulo1}</NavLink>
                <NavLink to={'capas'}>{titulo2}</NavLink>
                <NavLink to={'capitulos'}>{titulo3}</NavLink>
            </div>
            <div className={styles.menuMobile}>
                <SimpleMenu
                    linkMob1={<NavLink to={'/admin'}>{titulo1}</NavLink>}
                    linkMob2={<NavLink to={'capas'}>{titulo2}</NavLink>}
                    linkMob3={<NavLink to={'capitulos'}>{titulo3}</NavLink>}
                />
            </div>
        </nav>
    )
}

export default NavBarAdm