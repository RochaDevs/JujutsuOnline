import { Outlet } from "react-router-dom"
import Cabecalho from "../../../Components/ParaUsers/UserCabecalho"
import Rodape from "../../../Components/ParaUsers/UsersRodape"

function PaginaPadrao() {
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </>
    )
}

export default PaginaPadrao