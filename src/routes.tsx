import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Pages/Inicio"
import PaginaError from "./Pages/PaginaErro"
import Volumes from "./Pages/Volumes"
import Capitulo from "./Pages/Capitulo"
import './scss/Main.module.scss'
import EmConstrucao from "./Components/ParaUsers/UserEmConstrucao"
import AdmCapas from "./Pages/Administracao/AdmCapas"
import PaginaPadrao from "./Pages/PagesUsuarios/PaginaPadrao"
import Administracao from "./Pages/Administracao"
import FormularioCapas from "./Pages/Administracao/AdmCapas/AdmCapasForm"
import AreaAdmin from "./Pages/Administracao/AreaAdmin"
import AdmCapitulos from "./Pages/Administracao/AdmCapitulos"
import FormularioCapitulos from "./Pages/Administracao/AdmCapitulos/AdmCapitulosForm"

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

                    <Route path="/admin" element={<Administracao />}>
                        <Route index element={<AreaAdmin />} />
                        <Route path='capas' element={<AdmCapas />} />
                        <Route path='capas/:id' element={<FormularioCapas />} />
                        <Route path='capas/novo' element={<FormularioCapas />} />
                        <Route path='capitulos' element={<AdmCapitulos />} />
                        <Route path='capitulos/:id' element={<FormularioCapitulos />} />
                        <Route path='capitulos/novo' element={<FormularioCapitulos />} />
                    </Route>
                </Routes>

            </main>

        </BrowserRouter>
    )
}

export default AppRoutes