import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import styles from './AdmCapitulos.module.scss'
import { httpCapitulos } from "../../../http"
import ICapitulo from "../../../interfaces/ICapitulos"

function AdmCapitulos() {

    const [capitulos, setCapitulos] = useState<ICapitulo[]>([])

    useEffect(() => {
        httpCapitulos.get('')
            .then(resposta => {
                setCapitulos(resposta.data)
            })
    }, [])

    return (
        <section className={styles.sectionStyled}>

            <aside className={styles.asideStyled}>
                <Paper>
                    <img src="/public/gege.png" alt="Gege Akutami" />
                    <Typography color={'text.secondaty'} textAlign={'center'} padding={'1rem'}>
                        Olá, eu sou Gege Akutami! O criador de Jujutsu Kaisen. Se você deseja adicionar um dos meus mais recentes capítulos, basta clicar no botão abaixo!
                    </Typography>
                    <NavLink to={'novo'}>
                        <Button size='small' fullWidth>Novo capítulo</Button>
                    </NavLink>
                </Paper>
            </aside>

            <div className={styles.containerStyled}>

                <TableContainer component={Paper}>
                    <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Capítulos</TableCell>
                                <TableCell align="right">Editar</TableCell>
                                <TableCell align="right">Apagar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {capitulos.map((capitulo) =>
                                <TableRow key={capitulo.id}>
                                    <TableCell>{capitulo.capitulo}</TableCell>
                                    <TableCell align="right">
                                        <NavLink to={`${capitulo.id}`}>
                                            <Button size="small">[ Editar ]</Button>
                                        </NavLink>
                                    </TableCell>
                                    <TableCell align="right">
                                        <NavLink to={''}>
                                            <Button size="small" color="error">Apagar</Button>
                                        </NavLink>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>

        </section>

    )
}

export default AdmCapitulos