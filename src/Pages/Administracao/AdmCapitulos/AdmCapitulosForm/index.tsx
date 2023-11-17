import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { useState } from 'react'
import { httpCapitulos } from "../../../../http"

function FormularioCapitulos() {

    const [capitulo, setCapitulos] = useState('')
    const [capituloID, setCapitulosID] = useState('')
    const [urls, setUrls] = useState('')

    const aoSubmeterForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        httpCapitulos.post('', {
            capitulo: capitulo,
            capituloID: capituloID,
            urls: urls
        })
            .then(() => {
                alert('Novo capítulo adicionado com sucesso')
            })
    }

    return (

        <section>

            <Paper sx={{ p: 6 }}>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>

                    <Typography component={'h1'} variant="h5">
                        Formulário de Capítulos
                    </Typography>

                    <Box component={'form'} onSubmit={aoSubmeterForm}>

                        <TextField
                            sx={{ margin: '0.5rem 0rem' }}
                            label="Capítulo"
                            variant="outlined"
                            type="text"
                            fullWidth
                            required
                            value={capitulo}
                            onChange={(evento) => setCapitulos(evento.target.value)}
                        />
                        <TextField
                            sx={{ margin: '0.5rem 0rem' }}
                            label="Capítulo ID"
                            variant="outlined"
                            type="text"
                            fullWidth
                            required
                            value={capituloID}
                            onChange={(evento) => setCapitulosID(evento.target.value)}
                        />
                        <TextField
                            sx={{ margin: '0.5rem 0rem' }}
                            label="URL's"
                            variant="outlined"
                            type="text"
                            fullWidth
                            value={urls}
                            onChange={(evento) => setUrls(evento.target.value)}
                        />
                        <Button
                            sx={{ margin: '0.5rem 0rem' }}
                            type="submit"
                            variant="outlined"
                            fullWidth
                        >   Enviar
                        </Button>

                        <Button
                            sx={{ margin: '0.5rem 0rem' }}
                            type="submit"
                            variant="outlined"
                            fullWidth
                            color="error"
                        >   Voltar
                        </Button>

                    </Box>

                </Box>

            </Paper>

        </section>
    )
}

export default FormularioCapitulos