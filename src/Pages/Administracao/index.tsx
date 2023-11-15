import { Outlet } from "react-router-dom";

function Administracao() {
    return (
        <>
            <h1 style={{color: '#FFF'}}>ADMINISTRAÇÃO</h1>
            <Outlet />
        </>
    )
}

export default Administracao