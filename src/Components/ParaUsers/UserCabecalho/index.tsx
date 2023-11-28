
import logo from './logo.png';
import styles from './Cabecalho.module.scss'
import UserNavBar from "../UserNavBar";
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';


function UserCabecalho() {

    return (
        <header className={styles.headerStyled}>
            <UserNavBar                 
                logo={logo}
                link1={<HomeIcon />}
                link2={<PlayArrowIcon />}
                link3={<MenuBookIcon />}
                link4={<AdminPanelSettingsIcon />}
                icone1={<PersonIcon/>}
            />
        </header>
    );
}

export default UserCabecalho