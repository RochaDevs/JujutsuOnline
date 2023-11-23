import { Outlet } from "react-router-dom"
import Rodape from "../../../Components/ParaUsers/UsersRodape"
import UserCabecalho from "../../../Components/ParaUsers/UserCabecalho"

export default function UserPaginaPadrao() {
    return (
        <>
            <UserCabecalho />
            <Outlet />
            <Rodape />
        </>
    )
}

