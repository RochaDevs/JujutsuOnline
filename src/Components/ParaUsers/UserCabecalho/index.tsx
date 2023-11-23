
import logo from './logo.png';
import { FaReadme, FaPlay, FaHome} from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';
import styles from './Cabecalho.module.scss'
import UserNavBar from "../UserNavBar";


function UserCabecalho() {

    return (
        <header className={styles.headerStyled}>
            <UserNavBar                 
                logo={logo}
                link1={<div className={styles.divStyled} ><FaHome size={20} />INÍCIO</div>}
                link2={<div className={styles.divStyled} ><FaPlay />ANIME</div>}
                link3={<div className={styles.divStyled} ><FaReadme />MANGÁ</div>}
                icone1={<div className={styles.divStyled} ><BiLogIn size={26}/></div>}
            />
        </header>
    );
}

export default UserCabecalho