import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { useGetUsuarios } from '../../../../hooks/useUsuarios';

const SectionStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
`

export function UserMeusDados() {

    const {data: usuarios} = useGetUsuarios()

    const usuario = usuarios?.find(usuario => usuario.id === sessionStorage.getItem('token'))
    console.log(usuario)

    return (

        <SectionStyled>

            <TableContainer component={Paper} sx={{
                width: '80%'
            }}>

                <Table aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>Senha</TableCell>
                            <TableCell align='right'>Editar</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        <TableRow>
                            <TableCell component="th" scope="row">{usuario?.nomeCompleto}</TableCell>
                            <TableCell>{usuario?.email}</TableCell>
                            <TableCell>{usuario?.senha}</TableCell>
                            <TableCell align='right'>
                                Editar
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>

            </TableContainer>

        </SectionStyled>

    );
}