import CapaVolume from './UserCapaDosVolume';
import { FaReadme } from 'react-icons/fa';
import styles from './LerManga.module.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetCapas } from '../../../hooks/useCapas';
import UserLoading from '../UserLoading';

function UserCarousel() {

    const { data: capas, isLoading } = useGetCapas();

    const ordemCapas = () => {
        if (Array.isArray(capas)) {
            capas.sort((a, b) => {
                return Number(a.volume) - Number(b.volume);
            });
            return capas; // retorna o array ordenado
        }
    }

    ordemCapas()

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1250, 
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 720, // Celulares
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550, // Celulares
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className={styles.divStyled}>
            <h1 className={styles.h1Styled}>
                <FaReadme />
                Ler Mangá
            </h1>

            <Slider {...sliderSettings}>
                {isLoading ? (
                    // Exibir placeholders de carregamento
                    Array.from({ length: 6 }).map((_, index) => (

                        <UserLoading key={index} />

                    ))
                ) : Array.isArray(capas) ? (
                    // Exibir as capas
                    capas?.map(capa => (
                        <CapaVolume
                            key={capa.id} // Supondo que 'capa' tem um campo 'id'
                            url={capa.url}
                            descricao={capa.descricao}
                            titulo={capa.titulo}
                            volume={capa.volume}
                        />
                    ))
                ) : null}
            </Slider>
        </div>
    );
}


export default UserCarousel
