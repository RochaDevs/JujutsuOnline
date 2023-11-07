import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cabecalho from "./Components/Cabecalho"
import Rodape from "./Components/Rodape"
import Inicio from "./Pages/Inicio"
import PaginaError from "./Pages/PaginaErro"
import Volumes from "./Pages/Volumes"
import Capitulo from "./Pages/Capitulo"
import './scss/Main.module.scss'
import EmConstrucao from "./Components/EmConstrucao"

function AppRoutes() {

    return (
        <BrowserRouter>
            <main>
                <Cabecalho />
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='anime' element={<EmConstrucao />} />
                    <Route path='manga' element={<EmConstrucao />} />
                    <Route path='login' element={<EmConstrucao />} />
                    <Route path='cadastrar' element={<EmConstrucao />} />
                    <Route path="volumes/:volume" element={<Volumes />} />
                    <Route path="volumes/:volume/:capitulo" element={<Capitulo />} />
                    <Route path='*' element={<PaginaError children={'Essa página'} />} />
                </Routes>
                <Rodape />
            </main>
        </BrowserRouter>
    )
}

export default AppRoutes