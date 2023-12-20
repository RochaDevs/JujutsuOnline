import { NavLink, useNavigate } from "react-router-dom"
import styles from './NavBar.module.scss'
import styled from "styled-components"
import { Button } from "@mui/material"
import SimpleMenu from "./SimpleMenu"
import { useUsuarioEstaLogadoContextAPI } from "../../../hooks/useUsuarioEstaLogado"
interface INavBar {
    logo: string
    icone1: React.ReactNode
    icone2: React.ReactNode
    icone3: React.ReactNode
    icone4: React.ReactNode
    icone5: React.ReactNode
    icone6: React.ReactNode
    icone7: React.ReactNode

}

function UserNavBar({ logo, icone1, icone2, icone3, icone4, icone5, icone6, icone7 }: INavBar) {

    const {usuarioEstaLogado, setUsuarioEstaLogado} = useUsuarioEstaLogadoContextAPI()
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
                    {icone1}
                    INÍCIO
                </NavLinkStyled>
                <NavLinkStyled to={'/anime'}>
                    {icone2}
                    ANIME
                </NavLinkStyled>
                <NavLinkStyled to={'/manga'}>
                    {icone3}
                    MANGÁ
                </NavLinkStyled>
                <NavLinkStyled to={'/loginAdmin'}>
                    {icone4}
                    ADM
                </NavLinkStyled>
            </div>

            <div className={styles.MenuMobile}>
                <NavLink to={'/'} >
                    <img className={styles.imgStyled} src={logo} alt="Titulo JJK" />
                </NavLink>
                {!usuarioEstaLogado && (
                    <SimpleMenu
                        linkMob1={<NavLinkStyled to={'/'} >{icone1}</NavLinkStyled>}
                        linkMob2={<NavLinkStyled to={'/anime'} >{icone2}</NavLinkStyled>}
                        linkMob3={<NavLinkStyled to={'/manga'} >{icone3}</NavLinkStyled>}
                        linkMob4={<NavLinkStyled to={'/login'}>{icone5}</NavLinkStyled>}
                        linkMob5={<NavLinkStyled to={'/loginAdmin'}>{icone4}</NavLinkStyled>}
                    />
                )}
                {usuarioEstaLogado && (
                    <SimpleMenu
                        linkMob1={<NavLinkStyled to={'/'} >{icone1}</NavLinkStyled>}
                        linkMob2={<NavLinkStyled to={'/anime'} >{icone2}</NavLinkStyled>}
                        linkMob3={<NavLinkStyled to={'/manga'} >{icone3}</NavLinkStyled>}
                        linkMob6={<NavLinkStyled to={'/minha-conta'}>{icone6}</NavLinkStyled>}
                        linkMob7={<NavLinkStyled to={'/minha-conta'}>{
                            <Button sx={{ padding: '0rem 1rem', margin: '0rem 1rem' }} color='error' onClick={efetuarLogout}>
                                {icone7}
                            </Button>
                        }</NavLinkStyled>}
                    />
                )}
            </div>
            
            <div>
                {!usuarioEstaLogado && (
                    <div className={styles.divTwoStyled}>
                        <NavLinkStyled to={'/login'}>
                            {icone5}
                            LOGIN
                        </NavLinkStyled>
                    </div>
                )}
                {usuarioEstaLogado && (
                    <div className={styles.divTwoStyled}>
                        <NavLinkStyled to={'/minha-conta'}>MINHA CONTA</NavLinkStyled>
                        <Button sx={{ padding: '0rem 1rem', margin: '0rem 1rem' }} color='error' onClick={efetuarLogout}>
                            {icone7}
                        </Button>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default UserNavBar