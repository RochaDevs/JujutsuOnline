import UserCarousel from "../../../Components/ParaUsers/UserCarousel"
import styles from './UserInicio.module.scss'

export default function UserInicio() {

    // // let urls = [];
    // // for (let i = 1; i <= 19; i++) {
    // //     urls.push(`https://github.com/RochaDevs/capitulos/blob/main/Mang%C3%A1/vol.%201/cap-006/${i}.jpg?raw=true`);
        
    // // }

    // const stringFinal = urls.join(", ");
    // console.log(stringFinal);

    return (
        <section className={styles.sectionStyled}>
            <UserCarousel />
        </section>
    )
}