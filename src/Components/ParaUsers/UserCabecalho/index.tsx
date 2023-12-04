
import logo from './logo.png';
import styles from './Cabecalho.module.scss'
import UserNavBar from "../UserNavBar";
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import BuildIcon from '@mui/icons-material/Build';


function UserCabecalho() {

    return (
        <header className={styles.headerStyled}>
            <UserNavBar                 
                logo={logo}
                icone1={<HomeIcon />}
                icone2={<PlayArrowIcon />}
                icone3={<MenuBookIcon />}
                icone4={<AdminPanelSettingsIcon />}
                icone5={<PersonIcon/>}
                icone6={<BuildIcon />}
                icone7={<LogoutIcon />}
            />
        </header>
    );
}

export default UserCabecalho