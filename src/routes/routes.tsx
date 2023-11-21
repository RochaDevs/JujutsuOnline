import { BrowserRouter, Route, Routes } from "react-router-dom"
import '../app/scss/Main.module.scss'
import AdmCapas from "../Pages/PagesAdmin/AdminCapas"
import Administracao from "../Pages/PagesAdmin/AdminPagePadrao"
import FormularioCapas from "../Pages/PagesAdmin/AdminCapas/AdmCapasForm"
import AreaAdmin from "../Pages/PagesAdmin/AreaAdmin"
import AdmCapitulos from "../Pages/PagesAdmin/AdminCapitulos"
import FormularioCapitulos from "../Pages/PagesAdmin/AdminCapitulos/AdminCapitulosForm"
import UserMinhaConta from "../Pages/PagesUsers/UserMinhaConta"
import UserPaginaPadrao from "../Pages/PagesUsers/UserPagePadrao"
import UserInicio from "../Pages/PagesUsers/UserInicio"
import UserEmConstrucao from "../Components/ParaUsers/UserEmConstrucao"
import UserLogin from "../Pages/PagesUsers/UserLogin"
import UserCadastrar from "../Pages/PagesUsers/UserCadastro"
import UserVolumes from "../Pages/PagesUsers/UserVolumes"
import UserCapitulo from "../Pages/PagesUsers/UserCapitulo"
import UserPaginaError from "../Pages/PagesUsers/UserPageError"
import UserVolumesFavoritos from "../Pages/PagesUsers/UserMinhaConta/UserVolumesFavoritos"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryCliente = new QueryClient();

function AppRoutes() {

    return (
        <QueryClientProvider client={queryCliente}>
            <BrowserRouter>

                <main>

                    <Routes>
                        <Route path="/" element={<UserPaginaPadrao />}>
                            <Route index element={<UserInicio />} />
                            <Route path='anime' element={<UserEmConstrucao />} />
                            <Route path='manga' element={<UserEmConstrucao />} />
                            <Route path='login' element={<UserLogin />} />
                            <Route path='minha-conta' element={<UserMinhaConta />}>
                                <Route path='volumes-favoritos' element={<UserVolumesFavoritos />} />
                                <Route path='capitulos-favoritos' element={<UserEmConstrucao />} />
                                <Route path='meus-dados' element={<UserEmConstrucao />} />
                            </Route>
                            <Route path='cadastrar' element={<UserCadastrar />} />                       
                            <Route path="volumes/:volume" element={<UserVolumes />} />
                            <Route path="volumes/:volume/:capitulo" element={<UserCapitulo />} />
                            <Route path='*' element={<UserPaginaError children={'Essa página'} />} />
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
        </QueryClientProvider>
    )
}

export default AppRoutes