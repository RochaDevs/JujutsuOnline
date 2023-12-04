import { Button, Paper, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { IUsers } from "../../../interfaces/IUsers"
import { useGetUsuarios } from "../../../hooks/useUsuarios"
import styles from './UserFormLogin.module.scss'
import { useUsuarioEstaLogadoContextAPI } from "../../../hooks/useUsuarioEstaLogado"


function UserFormLogin() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [usuarioEncontrado, setUsuarioEncontrado] = useState<IUsers | undefined>()
    const navigate = useNavigate()
    const {usuarioEstaLogado, setUsuarioEstaLogado} = useUsuarioEstaLogadoContextAPI()

    const { data: usuarios } = useGetUsuarios()


    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
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
        if (usuarioEncontrado) {
            sessionStorage.setItem('token', usuarioEncontrado.id as string);
            setUsuarioEstaLogado(true);
            navigate('/')

        } else {
            console.log('Usuário não encontrado');
        }
    }, [usuarioEncontrado, navigate]);

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
            '@media (max-width: 600px)': {
                width: '90%',
                height: '80%'
            }
        }}>
            <Typography
                color={'#FFF'}>
                Faça aqui o seu login
            </Typography>

            <form className={styles.formStyled} onSubmit={aoSubmeterForm}>
                <TextField
                    sx={{
                        width: '80%',
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
                        },
                        '@media (max-width: 600px)': {
                            width: '80%',
                        }
                    }}
                    label="E-mail"
                    variant="outlined"
                    value={email}
                    onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setEmail(evento.target.value)}
                    required
                />

                <TextField
                    sx={{
                        width: '80%',
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
                        },
                        '@media (max-width: 600px)': {
                            width: '80%'
                        }
                    }}
                    label="Senha"
                    variant="outlined"
                    value={senha}
                    type="password"
                    onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setSenha(evento.target.value)}
                    required
                />
                <div className={styles.divStyled}>
                    <NavLink to={'/cadastrar'}>
                        <Button sx={{
                            '@media (max-width: 600px)': {
                                width: '100%',
                                padding: '0rem 3rem'
                            }
                        }} color="error" variant="outlined">
                            Cadastrar
                        </Button>
                    </NavLink>
                    <Button sx={{
                        '@media (max-width: 600px)': {
                            width: '100%',
                            padding: '0rem 3rem'
                        }
                    }} color="error" variant="outlined" type="submit">
                        Login
                    </Button>
                </div>
            </form>

        </Paper>
    )
}

export default UserFormLogin