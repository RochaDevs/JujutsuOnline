import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { useState, useEffect } from 'react'
import { httpCapitulos } from "../../../../http"
import { useNavigate, useParams } from "react-router-dom"
import { useGetCapitulos } from "../../../../hooks/useCapitulos"

function FormularioCapitulos() {

    const [capitulo, setCapitulo] = useState('')
    const [capituloID, setCapituloID] = useState('')
    const [urls, setUrls] = useState('')

    const parametros = useParams()
    const hookNavegation = useNavigate()
    const { data: capitulos } = useGetCapitulos(parametros.id)


    useEffect(() => {

        if (parametros.id && capitulos) {

            setCapitulo(capitulos.capitulo)
            setCapituloID(capitulos.capituloID)
            setUrls(capitulos.urls)

        }

    }, [parametros.id, capitulos])

    const aoSubmeterForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (parametros.id) {
            httpCapitulos.put(`/${parametros.id}`, {
                capitulo: capitulo,
                capituloID: capituloID,
                urls: urls
            }).then(() => {
                alert('Capítulo atualizado com sucesso')
            })

        } else {

            httpCapitulos.post('', {
                capitulo: capitulo,
                capituloID: capituloID,
                urls: urls
            }).then(() => {
                alert('Novo capítulo adicionado com sucesso')
            })
        }

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
                            onChange={(evento) => setCapitulo(evento.target.value)}
                        />
                        <TextField
                            sx={{ margin: '0.5rem 0rem' }}
                            label="Capítulo ID"
                            variant="outlined"
                            type="text"
                            fullWidth
                            required
                            value={capituloID}
                            onChange={(evento) => setCapituloID(evento.target.value)}
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
                            variant="outlined"
                            onClick={() => hookNavegation(-1)}
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