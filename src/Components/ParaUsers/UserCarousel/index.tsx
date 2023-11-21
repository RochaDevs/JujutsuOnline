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
    console.log(capas)

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
                ): null}
            </Slider>
        </div>
    );
}


export default UserCarousel
