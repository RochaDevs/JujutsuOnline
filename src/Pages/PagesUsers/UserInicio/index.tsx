import UserCarousel from "../../../Components/ParaUsers/UserCarousel"
import styles from './UserInicio.module.scss'

export default function UserInicio() {

    // let urls = [];
    // for (let i = 3; i <= 21; i++) {
    //     urls.push(`https://github.com/RochaDevs/capitulos/blob/main/Mang%C3%A1/vol.%201/cap-004/${i}.png?raw=true`);
    // }

    // const stringFinal = urls.join(", ");
    // console.log(stringFinal);

    return (
        <section className={styles.sectionStyled}>
            <UserCarousel />
        </section>
    )
}