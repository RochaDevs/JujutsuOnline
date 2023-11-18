import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "../Pages/PagesUsers/UserInicio"
import PaginaError from "../Pages/PagesUsers/UserPageError"
import Volumes from "../Pages/PagesUsers/UserVolumes"
import Capitulo from "../Pages/PagesUsers/UserCapitulo"
import '../app/scss/Main.module.scss'
import EmConstrucao from "../Components/ParaUsers/UserEmConstrucao"
import AdmCapas from "../Pages/PagesAdmin/AdminCapas"
import PaginaPadrao from "../Pages/PagesUsers/UserPagePadrao"
import Administracao from "../Pages/PagesAdmin/AdminPagePadrao"
import FormularioCapas from "../Pages/PagesAdmin/AdminCapas/AdmCapasForm"
import AreaAdmin from "../Pages/PagesAdmin/AreaAdmin"
import AdmCapitulos from "../Pages/PagesAdmin/AdminCapitulos"
import FormularioCapitulos from "../Pages/PagesAdmin/AdminCapitulos/AdminCapitulosForm"

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