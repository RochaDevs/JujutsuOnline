
import styles from './Rodape.module.scss'


function Rodape() {

    return (
        <footer className={styles.footerStyled}>

            <div className={styles.divStyled}>
                <h3 className={styles.h3Styled} style={{ color: '#B70404' }}>onlinejjk.com</h3>
                <p style={{ color: '#CFD2CF' }}>O seu site especializado em Jujutsu Kaisen</p>
            </div>
            
        </footer>
    );
}

export default Rodape