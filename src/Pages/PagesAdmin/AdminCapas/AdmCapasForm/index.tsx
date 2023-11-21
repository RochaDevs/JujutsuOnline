import { TextField, Button, Typography, Box, Paper } from "@mui/material"
import styles from './FormularioCapas.module.scss'
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGetCapas, usePostCapa, usePutCapa } from "../../../../hooks/useCapas"
import ICapas from "../../../../interfaces/ICapas"

function FormularioCapas() {

    const [titulo, setTitulo] = useState('')
    const [volume, setVolume] = useState('')
    const [descricao, setDescricao] = useState('')
    const [url, setUrl] = useState('')
    const [capitulos, setCapitulos] = useState('')

    const parametros = useParams()
    const hookNavegation = useNavigate()
    const { data: capas } = useGetCapas(parametros.id)
    const { mutate: mutatePut } = usePutCapa()
    const {mutate: mutatePost} = usePostCapa()

    const limparFormulario = () => {
        setTitulo('');
        setVolume('');
        setDescricao('');
        setUrl('');
        setCapitulos('');
    };

    useEffect(() => {
        if (parametros.id && capas) {

            const capaSelecionada = capas as ICapas;

            setTitulo(capaSelecionada.titulo),
                setVolume(capaSelecionada.volume),
                setDescricao(capaSelecionada.descricao),
                setUrl(capaSelecionada.url)

            if (capaSelecionada.capitulos !== undefined) {
                setCapitulos(capaSelecionada.capitulos);
            }

        }
    }, [parametros.id, capas])

    const aoSubmeterForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const dadosCapa: ICapas = {
            // Supondo que ICapas tenha essas propriedades
            titulo: titulo,
            volume: volume,
            descricao: descricao,
            url: url,
            capitulos: capitulos
        };

        if (parametros.id) {

            mutatePut({ capaAhSerEditada: dadosCapa, paramsID: parametros.id });

        } else {

            mutatePost(dadosCapa)
            limparFormulario()

        }

    }

    return (

        <section className={styles.sectionStyled}>

            <Paper sx={{ p: 6 }}>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>

                    <Typography component={'h1'} variant="h5">
                        Formulário de Capas
                    </Typography>

                    <Box component={'form'} onSubmit={aoSubmeterForm}>

                        <TextField
                            sx={{ margin: '0.5rem 0rem' }}
                            label="Titulo"
                            variant="outlined"
                            value={titulo}
                            type="text"
                            onChange={(evento) => setTitulo(evento.target.value)}
                            fullWidth
                            required
                        />
                        <TextField
                            sx={{ margin: '0.5rem 0rem' }}
                            label="Volume"
                            variant="outlined"
                            value={volume}
                            type="text"
                            onChange={(evento) => setVolume(evento.target.value)}
                            fullWidth
                            required
                        />
                        <TextField
                            sx={{ margin: '0.5rem 0rem' }}
                            label="Descrição"
                            variant="outlined"
                            value={descricao}
                            type="text"
                            onChange={(evento) => setDescricao(evento.target.value)}
                            fullWidth
                            required
                        />
                        <TextField
                            sx={{ margin: '0.5rem 0rem' }}
                            label="URL"
                            variant="outlined"
                            value={url} type="text"
                            onChange={(evento) => setUrl(evento.target.value)}
                            fullWidth
                            required
                        />

                        <TextField
                            sx={{ margin: '0.5rem 0rem' }}
                            label="Capítulos"
                            variant="outlined"
                            value={capitulos} type="text"
                            onChange={(evento) => setCapitulos(evento.target.value)}
                            fullWidth
                            required
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
                            onClick={() => hookNavegation(-1)}
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

export default FormularioCapas