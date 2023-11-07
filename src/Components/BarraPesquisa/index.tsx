import { AiOutlineClose } from 'react-icons/ai'
import styles from './BarraPesquisa.module.scss'

function BarraPesquisa() {

    return (
        <div className={styles.divStyled}>
            <div className={styles.divStyled}>
                <input className={styles.inputStyled} type="text" placeholder='Pesquisar...' />
                <button className={styles.buttonStyled}>
                    PESQUISAR
                </button>
                <button className={styles.buttonClosedStyled}>
                    <AiOutlineClose size={25} />
                </button>
            </div>
        </div>
    );
}

export default BarraPesquisa