import { TextField, Button } from "@mui/material"
import styles from './FormularioCapas.module.scss'
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import ICapas from "../../../interfaces/ICapas"

function FormularioCapas() {

    const parametros = useParams()

    console.log(parametros)

    useEffect(() => {
        if (parametros.id) {
            axios.get<ICapas>(`https://65495bd0dd8ebcd4ab248482.mockapi.io/manga/capas/${parametros.id}`)
                .then(resposta => {
                    setTitulo(resposta.data.titulo),
                        setVolume(resposta.data.volume),
                        setDescricao(resposta.data.descricao),
                        setUrl(resposta.data.url)
                })
        }
    }, [parametros])


    const hookNavegation = useNavigate()

    const aoSubmeterForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (parametros.id) {

            axios.put(`https://65495bd0dd8ebcd4ab248482.mockapi.io/manga/capas/${parametros.id}`, {
                titulo: titulo,
                volume: volume,
                descricao: descricao,
                url: url
            }).then(() => alert('Volume atualizado com sucesso'))

        } else {

            axios.post('https://65495bd0dd8ebcd4ab248482.mockapi.io/manga/capas', {
                titulo: titulo,
                volume: volume,
                descricao: descricao,
                url: url
            }).then(() => alert('Novo volume cadastrado com sucesso'))

        }

    }

    const [titulo, setTitulo] = useState('')
    const [volume, setVolume] = useState('')
    const [descricao, setDescricao] = useState('')
    const [url, setUrl] = useState('')

    return (
        <section className={styles.sectionStyled}>
            <Button type="submit" onClick={() => hookNavegation(-1)} variant="outlined">Voltar</Button>
            <form className={styles.formStyled} onSubmit={aoSubmeterForm}>
                <TextField label="Titulo" variant="outlined" value={titulo} type="text" onChange={(evento) => setTitulo(evento.target.value)} />
                <TextField label="Volume" variant="outlined" value={volume} type="text" onChange={(evento) => setVolume(evento.target.value)} />
                <TextField label="Descrição" variant="outlined" value={descricao} type="text" onChange={(evento) => setDescricao(evento.target.value)} />
                <TextField label="URL" variant="outlined" value={url} type="text" onChange={(evento) => setUrl(evento.target.value)} />
                <Button type="submit" variant="outlined">Enviar</Button>
            </form>
        </section>

    )
}

export default FormularioCapas