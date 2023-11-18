import CapaVolume from './UserCapaDosVolume';
import { FaReadme } from 'react-icons/fa';
import styles from './LerManga.module.scss'
import { useEffect, useState } from 'react';
import ICapas from '../../../interfaces/ICapas';
import { httpCapas } from '../../../http';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function UserCarousel() {

    const [capas, setCapas] = useState<ICapas[]>([])

    useEffect(() => {
        httpCapas.get('')
            .then(resposta => {
                setCapas(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    useEffect(() => {
        console.log(capas)
    }, [capas])

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
    };

    return (
        <div className={styles.divStyled}>

            <h1 className={styles.h1Styled}>
                <FaReadme />
                Ler Mangá
            </h1>

            <Slider {...sliderSettings}>
                {capas.map((capa) => (
                    <CapaVolume
                        key={capa.volume} // Usar 'id' como chave única
                        url={capa.url}
                        descricao={capa.descricao}
                        titulo={capa.titulo}
                        volume={capa.volume}
                    />
                ))}
            </Slider>

        </div>
    );
}


export default UserCarousel
