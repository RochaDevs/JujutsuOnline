import ICapas from "../interfaces/ICapas"


function SeparadorStrings(volumeEncontrado?: ICapas) {
    const strings = volumeEncontrado?.capitulos
    const stringsSeparadas = strings?.split(',')
    return (
        stringsSeparadas
    )
}

export default SeparadorStrings

