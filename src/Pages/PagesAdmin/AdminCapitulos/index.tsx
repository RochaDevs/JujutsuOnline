import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { NavLink } from "react-router-dom"
import styles from './AdmCapitulos.module.scss'
import ICapitulo from "../../../interfaces/ICapitulos"
import AdminPOST from "../../../Components/ParaAdmin/AdminPOST"
import { useDeleteCapitulo, useGetCapitulos } from "../../../hooks/useCapitulos"

function AdmCapitulos() {

    const {data: capitulos} = useGetCapitulos()

    const ordemCapas = () => {
        if (Array.isArray(capitulos)) {
            capitulos.sort((a, b) => {
                return parseInt(a.capituloID) - parseInt(b.capituloID);
            });
            return capitulos; // retorna o array ordenado
        }
    }

    ordemCapas()

    const {mutate: capituloDelete} = useDeleteCapitulo()

    function excluirCapitulo(capituloAhSerExcluido: string | undefined) {
        capituloDelete(capituloAhSerExcluido)
    }

    return (
        <section className={styles.sectionStyled}>

            <aside className={styles.asideStyled}>
                <AdminPOST
                    src={'/public/gege.png'}
                    alt={'Gege Akutami'}
                    tipographyChildren={'Olá, eu sou Gege Akutami! O criador de Jujutsu Kaisen. Se você deseja adicionar um dos meus mais recentes capítulos, basta clicar no botão abaixo!'}
                    buttonChildren={'Novo capítulo'}
                />
            </aside>

            <div className={styles.adminPostMobile}>
                <AdminPOST
                    tipographyChildren={'Olá, eu sou Gege Akutami! O criador de Jujutsu Kaisen. Se você deseja adicionar um dos meus mais recentes volumes, basta clicar no botão abaixo!'}
                    buttonChildren={'Nova Capa'}
                />
            </div>

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
                            {Array.isArray(capitulos) && capitulos?.map((capitulo: ICapitulo) =>
                                <TableRow key={capitulo.id}>
                                    <TableCell>{capitulo.capitulo}</TableCell>
                                    <TableCell align="right">
                                        <NavLink to={`${capitulo.id}`}>
                                            <Button size="small">[ Editar ]</Button>
                                        </NavLink>
                                    </TableCell>
                                    <TableCell align="right">
                                        <NavLink to={''}>
                                            <Button size="small" color="error" onClick={() => excluirCapitulo(capitulo.id)}>
                                                Apagar
                                            </Button>
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