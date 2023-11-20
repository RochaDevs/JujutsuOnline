import { Button, Paper, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { IUsers } from "../../../interfaces/IUsers"
import { useGetUsuarios } from "../../../hooks/useUsuarios"


function UserFormLogin() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [usuarioEncontrado, setUsuarioEncontrado] = useState<IUsers | undefined>()
    const navigate = useNavigate()

    const {data: usuarios} = useGetUsuarios()


    const aoSubmeterForm = (evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evento.preventDefault()

        const validarUsuario = (usuarios: IUsers[] | undefined) => {
            return usuarios?.find((usuario) => {
                return usuario.email === email && usuario.senha === senha
            })
        }

        const userFind = validarUsuario(usuarios)
        setUsuarioEncontrado(userFind)

    }

    useEffect(() => {
        if(usuarioEncontrado) {
            sessionStorage.setItem('token', usuarioEncontrado.id);
            console.log(usuarioEncontrado)
            navigate('/')
            window.location.reload();
        } else {
            console.log('Usuário não encontrado');
        }
    }, [usuarioEncontrado]);

    return (
        <Paper sx={{
            width: '50%',
            height: '70%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            backgroundColor: '#272829',
        }}>
            <Typography
                color={'#FFF'}>
                Faça aqui o seu login
            </Typography>
            <TextField
                sx={{
                    width: '50%',
                    '& label.Mui-focused': {
                        color: 'red', // Substitua 'corDaLabelFocada' pela cor desejada para a label quando focada
                    },
                    '& .MuiInputLabel-root': {
                        color: 'red', // Cor da label
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#CFD2CF', // Cor da borda
                        },
                        '&:hover fieldset': {
                            borderColor: 'red', // Cor da borda ao passar o mouse
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'red', // Cor da borda quando focada
                        },
                        '& input': {
                            color: '#CFD2CF', // Cor das letras digitadas
                        }
                    }
                }}
                label="E-mail"
                variant="outlined"
                value={email}
                onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setEmail(evento.target.value)}
            />

            <TextField
                sx={{
                    width: '50%',
                    '& label.Mui-focused': {
                        color: 'red', // Substitua 'corDaLabelFocada' pela cor desejada para a label quando focada
                    },
                    '& .MuiInputLabel-root': {
                        color: 'red', // Cor da label
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#CFD2CF', // Cor da borda
                        },
                        '&:hover fieldset': {
                            borderColor: 'red', // Cor da borda ao passar o mouse
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'red', // Cor da borda quando focada
                        },
                        '& input': {
                            color: '#CFD2CF', // Cor das letras digitadas
                        }
                    }
                }}
                label="Senha"
                variant="outlined"
                value={senha}
                type="password"
                onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setSenha(evento.target.value)}
            />
            <div style={{ display: "flex", gap: '1rem' }}>
                <NavLink to={'/cadastrar'}>
                    <Button color="error" variant="outlined">Cadastrar</Button>
                </NavLink>
                <Button color="error" variant="outlined" onClick={aoSubmeterForm}>
                    Login
                </Button>
            </div>
        </Paper>
    )
}

export default UserFormLogin