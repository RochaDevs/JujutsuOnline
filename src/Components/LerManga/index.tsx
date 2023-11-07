import capas from '../../../backend-json/capas-jjk.json';
import CapaVolume from './CapaVolume';
import { FaReadme } from 'react-icons/fa';
import styles from './LerManga.module.scss'

function LerManga() {

    return (
        <div className={styles.divStyled}>
            <h1 className={styles.h1Styled}><FaReadme />Ler Mangá</h1>
            <div className={styles.divTwoStyled}>
                {capas.volumes.map((capa) => (
                    <CapaVolume
                        key={capa.id} // Usar 'id' como chave única
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
