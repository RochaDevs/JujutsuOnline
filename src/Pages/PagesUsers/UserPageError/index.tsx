import Botao from "../../../Components/ParaUsers/UserBotao";
import { useNavigate } from "react-router-dom";
import styles from './PaginaErro.module.scss'
import sukunaImg from '../../../../public/sukuna.png'

interface IPaginaError {
    children: string
}

export default function UserPaginaError({children} :IPaginaError) {

    const hookNavegation = useNavigate()

    return (
        <div className={styles.divStyled}>
            <img className={styles.imgStyled} src={sukunaImg} alt="Sukuna" />
            <h1 className={styles.h1Styled}>Você está ficando louco? {children} nem existe!</h1>
            <Botao action={() => hookNavegation(-1)} titulo={'Voltar'} />
        </div>
    );
}
