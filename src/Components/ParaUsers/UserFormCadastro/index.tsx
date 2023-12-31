import { Button, Paper, TextField, Typography } from "@mui/material"
import { useState } from 'react'
import { usePostUsuario } from "../../../hooks/useUsuarios"
import styles from './UserFormCadastro.module.scss'

function UserFormCadastro() {

    const [nomeCompleto, setNomeCompleto] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('')
    const { mutate } = usePostUsuario()

    const limparForm = () => {
        setNomeCompleto('')
        setEmail('')
        setSenha('')
        setConfirmacaoSenha('')
    }

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const novoUsuario = {
            nomeCompleto: nomeCompleto,
            email: email,
            senha: senha,
            confirmacaoSenha: confirmacaoSenha
        }

        mutate(novoUsuario)

        limparForm()
    }

    return (
        <Paper sx={{
            width: '50%',
            height: 'max-content',
            padding: '2rem 0rem',
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
                Faça aqui o seu cadastro
            </Typography>
            <form onSubmit={aoSubmeterForm} className={styles.formStyled}>
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
                    label="Nome completo"
                    variant="outlined"
                    value={nomeCompleto}
                    onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setNomeCompleto(evento.target.value)}
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
                            width: '80%',
                        }
                    }}
                    label="E-mail"
                    variant="outlined"
                    type="email"
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
                            width: '80%',
                        }
                    }}
                    label="Senha"
                    variant="outlined"
                    type="password"
                    value={senha}
                    onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setSenha(evento.target.value)}
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
                            width: '80%',
                        }
                    }}
                    label="Confirmação de senha"
                    variant="outlined"
                    type="password"
                    value={confirmacaoSenha}
                    onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setConfirmacaoSenha(evento.target.value)}
                    required
                />

                <Button sx={{
                    '@media (max-width: 600px)': {
                        width: '80%',
                    }
                }} color="error" variant="outlined" type="submit">
                    Cadastrar
                </Button>
            </form>

        </Paper>
    )
}

export default UserFormCadastro