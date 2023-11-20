import { useParams } from "react-router-dom";
import Volume from "../../../Components/ParaUsers/UserVolume";
import { useGetCapas } from "../../../hooks/useCapas";
  

export default function UserVolumes() {

    const {data: capas} = useGetCapas()

    const parametros = useParams<{ volume: string }>();

    const volumeEncontrado = capas?.find((capa) => {
        return parametros.volume === capa.volume
    })

    console.log(volumeEncontrado)

    return (

        <>
            {volumeEncontrado && (
                <Volume volumeEncontrado={volumeEncontrado} key={volumeEncontrado.volume} />
            )}
        </>

    )
}