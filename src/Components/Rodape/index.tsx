import gojo from '../../assets/Gojo.png'
import { NavLink } from "react-router-dom";
import styles from './Rodape.module.scss'
import styled from "styled-components"

function Rodape() {

    const NavLinkStyled = styled(NavLink)`
        
        color: #CFD2CF;
        border-bottom: 1px rgba(207, 210, 207, 0.2) solid;
        display: inline;
        width: max-content;
        padding-bottom: 3px;
    
        &:hover {
            color: red;   
            border-bottom: 1px red solid;
        }
        &.active {
            color: red;
            border-bottom: 1px red solid;
        }
    `

    return (
        <footer className={styles.footerStyled}>
            <nav className={styles.navStyled}>

                <div>
                    <img className={styles.imgStyled} src={gojo} alt='Gojo Satoru fazendo o selo de sua expansão' />
                </div>


                <div className={styles.divStyled}>
                    <h3 className={styles.h3Styled} style={{ color: '#B70404' }}>onlinejjk.com</h3>
                    <p style={{ color: '#CFD2CF' }}>O seu site especializado em Jujutsu Kaisen</p>
                </div>

                <div className={styles.divStyled}>

                    <h3 className={styles.h3Styled}>Navegue</h3>

                    <NavLinkStyled className={styles.navLinkStyled} to={'/'}  >
                        Início
                    </NavLinkStyled>

                    <NavLinkStyled className={styles.navLinkStyled} to={'/anime'}  >
                        Anime
                    </NavLinkStyled>

                    <NavLinkStyled className={styles.navLinkStyled} to={'/manga'}  >
                        Mangá
                    </NavLinkStyled>

                </div>

                <div className={styles.divStyled}>

                    <h3 className={styles.h3Styled}>Páginas</h3>
                    <p className={styles.pStyled}>Contato</p>
                    <p className={styles.pStyled}>Termos de uso</p>
                    <p className={styles.pStyled}>Política de privacidade</p>
                    <p className={styles.pStyled}>DMCA / Copyright</p>
                </div>

            </nav>
        </footer>
    );
}

export default Rodape