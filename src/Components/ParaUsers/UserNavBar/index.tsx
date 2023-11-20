import { NavLink, useNavigate } from "react-router-dom"
import styles from './NavBar.module.scss'
import styled from "styled-components"
import { useState } from "react"
import { Button } from "@mui/material"
interface INavBar {
    logo: string
    link1: React.ReactNode
    link2: React.ReactNode
    link3: React.ReactNode
    icone1: React.ReactNode

}

function NavBar({ logo, link1, link2, link3, icone1 }: INavBar) {

    const token = sessionStorage.getItem('token')
    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token !== null)
    const navigate = useNavigate()

    const efetuarLogout = () => {
        setUsuarioEstaLogado(false)
        sessionStorage.removeItem('token')
        navigate('/')

    }

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
            <div>
                {!usuarioEstaLogado && (
                    <div className={styles.divTwoStyled}>
                        <NavLinkStyled to={'/login'}>{icone1}</NavLinkStyled>
                    </div>
                )}
                {usuarioEstaLogado && (
                    <>
                        <NavLinkStyled to={'/minha-conta'} >Minha Conta</NavLinkStyled>
                        <Button sx={{padding: '0rem 1rem', margin: '0rem 1rem'}} color='error' onClick={efetuarLogout}>
                            Sair
                        </Button>
                    </>
                )}

            </div>
        </nav>
    )
}

export default NavBar