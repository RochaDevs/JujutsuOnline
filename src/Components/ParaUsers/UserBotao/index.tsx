import styles from './Botao.module.scss'

interface IBotao {
    titulo: string
    action: () => void
}

function Botao({titulo, action} :IBotao) {

    return (
        <button className={styles.buttonStyled} onClick={action}>{titulo}</button>
    )
}

export default Botao