import { useNavigate, useParams } from "react-router-dom";
import PaginaError from "../UserPageError";
import styles from './Capitulo.module.scss'
import { useGetCapitulos } from "../../../hooks/useCapitulos";
import ICapitulos from "../../../interfaces/ICapitulos";
import Botao from "../../../Components/ParaUsers/UserBotao";

export default function UserCapitulo() {

  const parametros = useParams();
  const navigate = useNavigate();
  const { data: capitulos } = useGetCapitulos()

  const { volume, capitulo } = useParams();

  const volumeStr = volume ?? 'error';
  const capituloStr = capitulo ?? 'error';


  const avancar = () => {

    const proximoNumeroCapitulo = (parseInt(capituloStr, 10) + 1).toString().padStart(3, '0');
    navigate(`/volumes/${volumeStr}/${proximoNumeroCapitulo}`)

  }

  const retroceder = () => {
    const anteriorNumeroCapitulo = (parseInt(capituloStr, 10) - 1).toString().padStart(3, '0');
    navigate(`/volumes/${volumeStr}/${anteriorNumeroCapitulo}`)
  }



  const capituloEncontrado = Array.isArray(capitulos) ? capitulos.find((capitulo: ICapitulos) => {
    return capitulo.capituloID === parametros.capitulo
  }) : null

  if (!capituloEncontrado) {
    return (
      <PaginaError children={'Esse capítulo'} />
    );
  }

  const urlSplit = capituloEncontrado.urls.split(',');

  return (
    <div className={styles.divStyled}>
      {urlSplit.map((urlUnica) => {
        return <img className={styles.imgStyled} src={urlUnica} alt="Pagina" key={urlUnica} />;
      })}
      <div className={styles.divBotaoStyled}>
        <Botao
          titulo="Capítulo Anterior"
          action={retroceder}
        />
        <Botao
          titulo="Capítulo Seguinte"
          action={avancar}
        />
      </div>
    </div>
  );
}

