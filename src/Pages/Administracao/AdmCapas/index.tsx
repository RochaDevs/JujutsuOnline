import { useEffect, useState } from 'react'
import styles from './AdmCapas.module.scss'
import axios from 'axios'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import ICapas from '../../../interfaces/ICapas'



function AdmCapas() {

    const [capas, setCapas] = useState<ICapas[]>([])

    useEffect(() => {
        axios.get<ICapas[]>('https://65495bd0dd8ebcd4ab248482.mockapi.io/manga/capas')
            .then(resposta => {
                setCapas(resposta.data)
            })

    }, [])

    useEffect(() => {
        console.log(capas);
    }, [capas]);

    return (
        <div className={styles.containerStyled}>
            <h1>ÁREA DO ADM PARA REALIZAR O CRUD DAS CAPAS</h1>
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
                            <Button size='small'>Editar</Button>
                            <Button size='small'>Apagar</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>

    );

}

export default AdmCapas