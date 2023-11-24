import ICapas from "../interfaces/ICapas"


function SeparadorStrings(volumeEncontrado?: ICapas | undefined) {
    if(volumeEncontrado) {
        const strings = volumeEncontrado?.capitulos
        const stringsSeparadas = strings?.split(',')
        return (
            stringsSeparadas
        )
    }
}

export default SeparadorStrings

