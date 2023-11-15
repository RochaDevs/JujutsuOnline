import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Pages/Inicio"
import PaginaError from "./Pages/PaginaErro"
import Volumes from "./Pages/Volumes"
import Capitulo from "./Pages/Capitulo"
import './scss/Main.module.scss'
import EmConstrucao from "./Components/EmConstrucao"
import AdmCapas from "./Pages/Administracao/AdmCapas"
import PaginaPadrao from "./Components/PaginaPadrao"
import Administracao from "./Pages/Administracao"
import FormularioCapas from "./Pages/Administracao/AdmCapas/FormularioCapas"

function AppRoutes() {

    return (
        <BrowserRouter>

            <main>

                <Routes>
                    <Route path="/" element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path='anime' element={<EmConstrucao />} />
                        <Route path='manga' element={<EmConstrucao />} />
                        <Route path='login' element={<EmConstrucao />} />
                        <Route path='cadastrar' element={<EmConstrucao />} />
                        <Route path="volumes/:volume" element={<Volumes />} />
                        <Route path="volumes/:volume/:capitulo" element={<Capitulo />} />
                        <Route path='*' element={<PaginaError children={'Essa página'} />} />
                    </Route>

                    <Route path="/admin" element={<Administracao/>}>
                        <Route path='capas' element={<AdmCapas />} />
                        <Route path='capas/novo' element={<FormularioCapas />} />
                    </Route>
                </Routes>

            </main>

        </BrowserRouter>
    )
}

export default AppRoutes