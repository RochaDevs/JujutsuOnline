import { useParams } from "react-router-dom";
import Volume from "../../../Components/ParaUsers/UserVolume";
import { useEffect, useState } from "react";
import { httpCapas } from "../../../http";
import ICapas from "../../../interfaces/ICapas";
  

function Volumes() {

    const [capas, setCapas] = useState<ICapas[]>([])

    useEffect(() => {
        httpCapas.get<ICapas[]>('')
            .then(resposta => setCapas(resposta.data))
    }, [])

    // useEffect(() => {
    //     console.log(capas)
    // }, [capas])


    const parametros = useParams<{ volume: string }>();

    // console.log(parametros)

    const volumeEncontrado = capas.find((capa) => {
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

export default Volumes