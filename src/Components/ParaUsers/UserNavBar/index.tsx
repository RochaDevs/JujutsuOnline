import { NavLink } from "react-router-dom"
import styles from './NavBar.module.scss'
import styled from "styled-components"

interface INavBar {
    logo: string
    link1: React.ReactNode
    link2: React.ReactNode
    link3: React.ReactNode
    icone1: React.ReactNode

}


function NavBar({ logo, link1, link2, link3, icone1 } :INavBar) {


    const NavLinkStyled = styled(NavLink)`
        
        &:hover {
            color: red;   
        }
        &.active {
            color: red;
        }
    `

    return (

        <nav className={styles.navStyled}>
            <div className={styles.divOneStyled}>
                <NavLink to={'/'} >
                    <img className={styles.imgStyled} src={logo} alt="Titulo JJK" />
                </NavLink>
                <NavLinkStyled to={'/'} >{link1}</NavLinkStyled>
                <NavLinkStyled to={'/anime'} >{link2}</NavLinkStyled>
                <NavLinkStyled to={'/manga'} >{link3}</NavLinkStyled>
            </div>
            <div className={styles.divTwoStyled}>
                <NavLinkStyled to={'/login'}>{icone1}</NavLinkStyled>
            </div>
        </nav>
    )
}

export default NavBar