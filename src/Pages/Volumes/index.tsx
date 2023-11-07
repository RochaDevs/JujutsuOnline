import { useParams } from "react-router-dom";
import Volume from "../../Components/Volume";
import volumesjjk from "../../../backend-json/volumes.json";

interface VolumeObj {
    volume: number;
    url: string;
    titulo: string;
    descricao?: string;
    // Outras propriedades específicas do objeto de volume, se houver
}
  

function Volumes() {

    const parametros = useParams()

    const volumeObj: VolumeObj | undefined = volumesjjk.volumes.find((volumejjk) => {
        return volumejjk.volume === Number(parametros.volume)
    })

    console.log(typeof(volumeObj))

    return (

        <>
            {volumeObj && (
                <Volume volumeObj={volumeObj} key={volumeObj.volume} />
            )}
        </>

    )
}

export default Volumes