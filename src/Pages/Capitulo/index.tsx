import { useState } from "react";
import { useParams } from "react-router-dom";
import PaginaError from "../PaginaErro";
import capitulosManga from '../../../backend-json/capitulos.json'
import styles from './Capitulo.module.scss'

function Capitulo() {

  const [paginas, setPaginas] = useState(capitulosManga);
  const parametros = useParams();

  const capituloEncontrado = paginas.capitulos.find((pagina) => {
    return Number(pagina.capitulo) === Number(parametros.capitulo);
  });

  if (!capituloEncontrado) {
    return (
        <PaginaError children={'Esse capítulo'} />
    );
  }

  const urlSplit = capituloEncontrado.url.split(',');

  return (
    <div className={styles.divStyled}>
      {urlSplit.map((urlUnica) => {
        return <img className={styles.imgStyled} src={urlUnica} alt="Pagina" key={urlUnica} />;
      })}
    </div>
  );
}

export default Capitulo;
