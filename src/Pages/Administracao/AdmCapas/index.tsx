import { useEffect, useState } from 'react'
import styles from './AdmCapas.module.scss'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import ICapas from '../../../interfaces/ICapas'
import { NavLink } from 'react-router-dom'
import { httpCapas } from '../../../http'



function AdmCapas() {

    const [capas, setCapas] = useState<ICapas[]>([])

    useEffect(() => {
        httpCapas.get<ICapas[]>('')
            .then(resposta => {
                setCapas(resposta.data)
            })

    }, [])

    useEffect(() => {
        console.log(capas);
    }, [capas]);

    const excluirCapa = (capaAhSerExcluida: ICapas) => {
        httpCapas.delete(`/${capaAhSerExcluida.id}`)
            .then(() => {
                const listaCapas = capas.filter(capa => capa.id !== capaAhSerExcluida.id)
                setCapas([...listaCapas])
            })
    }

    return (
        <div className={styles.containerStyled}>

            <div className={styles.boxStyled}>
                <h1>ÁREA DO ADM PARA REALIZAR O CRUD DAS CAPAS</h1>
                <NavLink to={'novo'}>
                    <Button size='small'>Nova capa</Button>
                </NavLink>
            </div>

            <div className={styles.mainStyled}>
                {capas.length > 0 && capas.map((volume) => (
                    <Card
                        key={volume.id}
                        sx={{
                            width: 300,
                            height: 'min-content',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        {volume.url && (
                            <CardMedia
                                sx={{ width: '100%', height: 300 }}
                                component="img"
                                image={volume.url}
                                title={volume.titulo}
                            />
                        )}
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                {volume.titulo}
                            </Typography>
                            <Typography gutterBottom variant='body2' color='text.secondary'>
                                {volume.descricao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <NavLink to={`/admin/capas/${volume.id}`}>
                                <Button size='small'>Editar</Button>
                            </NavLink>
                            <NavLink>
                                <Button color='error' size='small' onClick={() => excluirCapa(volume)}>Apagar</Button>
                            </NavLink>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>

    );

}

export default AdmCapas