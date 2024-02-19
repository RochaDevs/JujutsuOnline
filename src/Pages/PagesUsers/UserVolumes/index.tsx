import { useParams } from "react-router-dom";
import Volume from "../../../Components/ParaUsers/UserVolume";
import { useGetCapas } from "../../../hooks/useCapas";
import ICapas from "../../../interfaces/ICapas";
  

export default function UserVolumes() {

    const {data: capas} = useGetCapas()

    const parametros = useParams<{ volume: string }>();

    console.log(parametros)

    const volumeEncontrado = Array.isArray(capas) ? capas.find((capa: ICapas) => {
        return parametros.volume === capa.volume 
    }) : null

    return (

        <>
            {volumeEncontrado && (
                <Volume volumeEncontrado={volumeEncontrado} key={volumeEncontrado.volume} />
            )}
        </>

    )
}