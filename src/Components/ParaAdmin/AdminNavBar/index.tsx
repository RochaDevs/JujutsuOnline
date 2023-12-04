import { NavLink, useNavigate } from "react-router-dom";
import styles from './NavBarAdm.module.scss'
import SimpleMenu from "../../ParaUsers/UserNavBar/SimpleMenu";
import styled from "styled-components";
import { useEffect, useState } from 'react'
import { useGetAdm } from "../../../hooks/useAdm";
import { Button } from "@mui/material"

interface INavBarAdm {
    titulo1: string
    titulo2: string
    titulo3: string
}

function NavBarAdm({ titulo1, titulo2, titulo3 }: INavBarAdm) {

    const token = sessionStorage.getItem('tokenAdmin')
    const [administradorEstaLogado, setAdministradorEstaLogado] = useState<boolean>(token !== null)
    const navigate = useNavigate()
    const [getData, setGetData] = useState('');

    const { data: administrador } = useGetAdm()

    console.log(administradorEstaLogado)

    const data = () => {
        const hora = new Date().getHours()

        if (hora < 12) {
            return ' bom dia,';
        } else if (hora < 18) {
            return ' boa tarde,';
        } else {
            return ' boa noite,';
        }
    }

    useEffect(() => {
        setGetData(data());
    }, []);

    const efetuarLogout = () => {
        setAdministradorEstaLogado(false)
        sessionStorage.removeItem('tokenAdmin')
        navigate('/')
    }

    const NavLinkStyled = styled(NavLink)`

        display: flex;
        height: 2rem;
        align-items: center;
        font-size: 1rem;
        gap: 0.325rem;

        &:hover {
            color: #D0A2F7;
        }
        &.active {
            color: #D0A2F7;
        }
    `
    const NavLinkStyledMobile = styled(NavLink)`

        display: flex;
        height: 2rem;
        align-items: center;
        font-size: 1rem;
        gap: 0.325rem;

        &:hover {
            color: #7752FE;
        }
        &.active {
            color: #7752FE;
        }
    `

    const saldarAdministrador = () => {
        const adminEncontrado = administrador?.find((adm) => {
            return adm.id == sessionStorage.getItem('tokenAdmin')
        })
        return adminEncontrado?.nomeCompleto
    }

    return (
        <nav className={styles.navStyled}>
            <div className={styles.saudacaoStyled}>
                <h1>Olá, <span>{getData}</span> <span>{saldarAdministrador()}</span></h1>
            </div>
            <div className={styles.linksStyled}>
                <NavLinkStyled end to={'/admin'}>{titulo1}</NavLinkStyled>
                <NavLinkStyled to={'capas'}>{titulo2}</NavLinkStyled>
                <NavLinkStyled to={'capitulos'}>{titulo3}</NavLinkStyled>
                <Button sx={{ color: '#FFF' }} onClick={efetuarLogout}>
                    Sair
                </Button>
            </div>
            <div className={styles.menuMobile}>
                <SimpleMenu
                    linkMob1={<NavLinkStyledMobile end to={'/admin'}>{titulo1}</NavLinkStyledMobile>}
                    linkMob2={<NavLinkStyledMobile to={'capas'}>{titulo2}</NavLinkStyledMobile>}
                    linkMob3={<NavLinkStyledMobile to={'capitulos'}>{titulo3}</NavLinkStyledMobile>}
                    linkMob4={<Button sx={{ color: '#000' }} onClick={efetuarLogout}>
                        Sair
                    </Button>}
                />
            </div>
        </nav>
    )
}

export default NavBarAdm