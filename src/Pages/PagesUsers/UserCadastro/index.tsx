import UserFormCadastro from "../../../Components/ParaUsers/UserFormCadastro"
import styles from './UserCadastro.module.scss'


export default function UserCadastrar() {
    return (
        <section className={styles.sectionStyled}>
            <UserFormCadastro />
        </section>
    )
}
