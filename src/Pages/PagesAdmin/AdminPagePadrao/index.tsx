import { Outlet } from "react-router-dom";
import NavBarAdm from "../../../Components/ParaAdmin/AdminNavBar";
import styles from './Administracao.module.scss'

function Administracao() {
    return (
        <section className={styles.sectionStyled}>
            <NavBarAdm 
                titulo1={'Início'}
                titulo2={'Capas'}
                titulo3={'Capítulos'}
            />
            <Outlet />
        </section>
    )
}

export default Administracao