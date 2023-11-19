import { Button, Paper, TextField, Typography } from "@mui/material"
import {useState} from 'react'
import { httpUsuarios } from "../../../http"

function UserFormCadastro() {

    const [nomeCompleto, setNomeCompleto] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('')

    const limparForm = () => {
        setNomeCompleto('')
        setEmail('')
        setSenha('')
        setConfirmacaoSenha('')
    }

    const aoSubmeterForm = (evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evento.preventDefault()

        httpUsuarios.post('', {
            nomeCompleto: nomeCompleto,
            email: email,
            senha: senha,
            confirmacaoSenha: confirmacaoSenha
        }).then(() => {
            alert('Cadastro feito com sucesso!')
            limparForm()
        }).catch(() => {
            console.log('Algo deu errado')
        })
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
        }}>
            <Typography
                color={'#FFF'}>
                Faça aqui o seu cadastro
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
                label="Nome completo"
                variant="outlined"
                value={nomeCompleto}
                onChange={(evento:  React.ChangeEvent<HTMLInputElement>) => setNomeCompleto(evento.target.value)}
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
                label="E-mail"
                variant="outlined"
                type="email"
                value={email}
                onChange={(evento:  React.ChangeEvent<HTMLInputElement>) => setEmail(evento.target.value)}
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
                type="password"
                value={senha}
                onChange={(evento:  React.ChangeEvent<HTMLInputElement>) => setSenha(evento.target.value)}
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
                label="Confirmação de senha"
                variant="outlined"
                type="password"
                value={confirmacaoSenha}
                onChange={(evento:  React.ChangeEvent<HTMLInputElement>) => setConfirmacaoSenha(evento.target.value)}
            />

            <Button color="error" variant="outlined" type="submit" onClick={aoSubmeterForm}>
                Cadastrar
            </Button>

        </Paper>
    )
}

export default UserFormCadastro