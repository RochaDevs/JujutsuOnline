import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import styles from './UserMinhaConta.module.scss'
import { Paper } from "@mui/material";

export default function UserMinhaConta() {

    const NavLinkStyled = styled(NavLink)`
     
    border-bottom: solid 1px #FFF;
    width: 100%;
    text-align: center;
    padding-bottom: 0.5rem;

    &:hover {
        color: red;   
        border-bottom: solid 1px red;
    }
    &.active {
        color: red;
        border-bottom: solid 1px red;
    }
`

    return (
        <section className={styles.sectionStyled}>
            <aside className={styles.asideStyled}>
                <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'max-content',
                    padding: '1rem 2rem',
                    height: '50%',
                    backgroundColor: '#272829',
                    color: '#FFF',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    fontSize: '1.25rem'
                }}>
                    <NavLinkStyled to={'volumes-favoritos'}>Volumes favoritos</NavLinkStyled>
                    <NavLinkStyled to={'capitulos-favoritos'}>Capítulos favoritos</NavLinkStyled>
                    <NavLinkStyled to={'meus-dados'}>Meus dados</NavLinkStyled>
                </Paper>
            </aside>
            <section className={styles.outletStyled}>
                <Outlet/>
            </section>
        </section >
    )
}