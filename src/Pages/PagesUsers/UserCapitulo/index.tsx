import { useParams } from "react-router-dom";
import PaginaError from "../UserPageError";
import styles from './Capitulo.module.scss'
import { useGetCapitulos } from "../../../hooks/useCapitulos";
import ICapitulos from "../../../interfaces/ICapitulos";

export default function UserCapitulo() {

  const parametros = useParams();
  const {data: capitulos} = useGetCapitulos()

  const capituloEncontrado = Array.isArray(capitulos) ? capitulos.find((capitulo: ICapitulos) => {
    return capitulo.capituloID === parametros.capitulo
  }): null

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
    </div>
  );
}

