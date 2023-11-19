import UserFormLogin from "../../../Components/ParaUsers/UserFormLogin"
import styles from './UserLogin.module.scss'


export default function UserLogin() {
    return (
        <section className={styles.sectionStyled}>
            <UserFormLogin />
        </section>
    )
}
