
import { Button, Paper, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import styles from './AdminFormLogin.module.scss'
import { IAdm } from "../../../interfaces/IAdm"
import { useGetAdm } from "../../../hooks/useAdm"


export default function AdminFormLogin() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [administradorEncontrado, setAdministradorEncontrado] = useState<IAdm | undefined>()
    const navigate = useNavigate()

    const { data: administrador } = useGetAdm()


    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const validarUsuario = (administrador: IAdm[] | undefined) => {
            return administrador?.find((adm) => {
                return adm.email === email && adm.senha === senha
            })
        }

        const adminFind = validarUsuario(administrador)
        setAdministradorEncontrado(adminFind)

    }

    useEffect(() => {
        if (administradorEncontrado) {
            sessionStorage.setItem('tokenAdmin', administradorEncontrado.id as string);
            navigate('/admin')
        }
    }, [administradorEncontrado, navigate]);

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
                Faça aqui o seu login como Adm
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