import { Outlet } from "react-router-dom"
import Cabecalho from "../../../Components/ParaUsers/UserCabecalho"
import Rodape from "../../../Components/ParaUsers/UsersRodape"

export default function UserPaginaPadrao() {
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </>
    )
}

