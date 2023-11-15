import CapaVolume from './CapaVolume';
import { FaReadme } from 'react-icons/fa';
import styles from './LerManga.module.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ICapas from '../../interfaces/ICapas';

function LerManga() {

    const [capas, setCapas] = useState<ICapas[]>([])

    useEffect(() => {
        axios.get('https://65495bd0dd8ebcd4ab248482.mockapi.io/manga/capas')
            .then(resposta => {
                setCapas(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return (
        <div className={styles.divStyled}>
            <h1 className={styles.h1Styled}><FaReadme />Ler Mangá</h1>
            <div className={styles.divTwoStyled}>
                {capas.map((capa) => (
                    <CapaVolume
                        key={capa.volume} // Usar 'id' como chave única
                        url={capa.url}
                        descricao={capa.descricao}
                        titulo={capa.titulo}
                        volume={capa.volume}
                    />
                ))}
            </div>

        </div>
    );
}


export default LerManga
