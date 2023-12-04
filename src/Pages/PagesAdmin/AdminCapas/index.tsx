import styles from './AdmCapas.module.scss'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import AdminPOST from '../../../Components/ParaAdmin/AdminPOST'
import { useDeleteCapa, useGetCapas } from '../../../hooks/useCapas'



function AdmCapas() {

    const { data: capas } = useGetCapas();

    const ordemCapas = () => {
        if (Array.isArray(capas)) {
            capas.sort((a, b) => {
                return Number(a.volume) - Number(b.volume);
            });
            return capas; // retorna o array ordenado
        }
    }

    console.log(ordemCapas())

    const { mutate } = useDeleteCapa();

    const excluirCapa = (capaAhSerExcluida: string | undefined) => {
        mutate(capaAhSerExcluida);
    }

    return (
        <section className={styles.sectionAllStyled}>

            <aside className={styles.asideStyled}>
                <AdminPOST
                    src={'/public/gege.png'}
                    alt={'Gege Akutami'}
                    tipographyChildren={'Olá, eu sou Gege Akutami! O criador de Jujutsu Kaisen. Se você deseja adicionar um dos meus mais recentes volumes, basta clicar no botão abaixo!'}
                    buttonChildren={'Nova Capa'}
                />
            </aside>

            <div className={styles.adminPostMobile}>
                <AdminPOST
                tipographyChildren={'Olá, eu sou Gege Akutami! O criador de Jujutsu Kaisen. Se você deseja adicionar um dos meus mais recentes volumes, basta clicar no botão abaixo!'}
                    buttonChildren={'Nova Capa'}
                />
            </div>

            <div className={styles.containerStyled}>

                <div className={styles.mainStyled}>
                    {Array.isArray(capas) && capas.length > 0 && capas.map((volume) => (
                        <Card
                            key={volume.id}
                            sx={{
                                width: 250,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            {volume.url && (
                                <CardMedia
                                    sx={{ width: '80%', height: 300, marginTop: '1rem' }}
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
                                <Button color='error' size='small' onClick={() => excluirCapa(volume.id)}>Apagar</Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

    );

}

export default AdmCapas