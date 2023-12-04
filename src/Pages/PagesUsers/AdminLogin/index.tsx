import AdminFormLogin from "../../../Components/ParaUsers/AdminFormLogin";
import styles from './AdminLogin.module.scss'

export default function AdminLogin() {
    return (
        <section className={styles.sectionStyled}>
            <AdminFormLogin />
        </section>
    )
}