import { NavLink, useNavigate } from "react-router-dom"
import styles from './NavBar.module.scss'
import styled from "styled-components"
import { useState } from "react"
import { Button } from "@mui/material"
import SimpleMenu from "./SimpleMenu"
interface INavBar {
    logo: string
    link1: React.ReactNode
    link2: React.ReactNode
    link3: React.ReactNode
    link4: React.ReactNode
    icone1: React.ReactNode

}

function UserNavBar({ logo, link1, link2, link3, link4, icone1 }: INavBar) {

    const token = sessionStorage.getItem('token')
    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token !== null)
    const navigate = useNavigate()

    const efetuarLogout = () => {
        setUsuarioEstaLogado(false)
        sessionStorage.removeItem('token')
        navigate('/')

    }

    const NavLinkStyled = styled(NavLink)`

        display: flex;
        height: 2rem;
        align-items: center;
        font-size: 1rem;
        gap: 0.325rem;

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
                <NavLinkStyled to={'/'}>
                    {link1}
                    INÍCIO
                </NavLinkStyled>
                <NavLinkStyled to={'/anime'}>
                    {link2}
                    ANIME
                </NavLinkStyled>
                <NavLinkStyled to={'/manga'}>
                    {link3}
                    MANGÁ
                </NavLinkStyled>
                <NavLinkStyled to={'/admin'}> 
                    {link4}
                    ADM
                </NavLinkStyled>
            </div>
            <div className={styles.MenuMobile}>
                <NavLink to={'/'} >
                    <img className={styles.imgStyled} src={logo} alt="Titulo JJK" />
                </NavLink>
                <SimpleMenu
                    linkMob1={<NavLinkStyled to={'/'} >{link1}</NavLinkStyled>}
                    linkMob2={<NavLinkStyled to={'/anime'} >{link2}</NavLinkStyled>}
                    linkMob3={<NavLinkStyled to={'/manga'} >{link3}</NavLinkStyled>}
                    linkMob4={<NavLinkStyled to={'/login'}>{icone1}</NavLinkStyled>}
                    linkMob5={<NavLinkStyled to={'/admin'}>{link4}</NavLinkStyled>}
                />
            </div>
            <div>
                {!usuarioEstaLogado && (
                    <div className={styles.divTwoStyled}>
                        <NavLinkStyled to={'/login'}>
                            {icone1}
                            LOGIN
                        </NavLinkStyled>
                    </div>
                )}
                {usuarioEstaLogado && (
                    <>
                        <NavLinkStyled to={'/minha-conta'} >Minha Conta</NavLinkStyled>
                        <Button sx={{ padding: '0rem 1rem', margin: '0rem 1rem' }} color='error' onClick={efetuarLogout}>
                            Sair
                        </Button>
                    </>
                )}

            </div>
        </nav>
    )
}

export default UserNavBar