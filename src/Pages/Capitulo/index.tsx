import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PaginaError from "../PaginaErro";
import styles from './Capitulo.module.scss'
import { httpCapitulos } from "../../http";
import ICapitulos from "../../interfaces/ICapitulos";

function Capitulo() {

  const [paginas, setPaginas] = useState<ICapitulos[]>([]);
  const parametros = useParams();

  useEffect(() => {
    httpCapitulos.get('')
      .then(resposta => {setPaginas(resposta.data), console.log(paginas)})
  }, [])

  console.log(parametros)

  const capituloEncontrado = paginas.find((pagina) => {
    return pagina.capituloID === parametros.capitulo
  })

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

export default Capitulo;
