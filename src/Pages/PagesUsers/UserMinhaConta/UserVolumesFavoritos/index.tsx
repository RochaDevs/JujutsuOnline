import { httpUsuarios } from "../../../../http"
import { useState, useEffect } from 'react'
import styles from './UserVolumesFavoritos.module.scss'
import { IUsuariosAutenticados } from "../../../../interfaces/IUsuariosAutenticados"

export default function UserVolumesFavoritos() {

    const [usuariosAutenticados, setUsuariosAutenticados] = useState<IUsuariosAutenticados[]>([])
    const [usuarioAutenticado, setUsuarioAutenticado] = useState<IUsuariosAutenticados | null>(null);

    const token = sessionStorage.getItem('token')

    useEffect(() => {
        httpUsuarios.get('')
            .then(resposta => {
                setUsuariosAutenticados(resposta.data);
            })
            .catch(erro => {
                console.log(erro);
            });
    }, []);

    useEffect(() => {
        const usuarioEncontrado = usuariosAutenticados.find(usuario => usuario.id === token);
        setUsuarioAutenticado(usuarioEncontrado ?? null);
    }, [usuariosAutenticados]);


    return (
        <div className={styles.divStyled}>
            {usuarioAutenticado && (
                <div className={styles.divStyled}>
                    <div>
                        <img className={styles.imgStyled} src={usuarioAutenticado.url ?? ''} alt={usuarioAutenticado.titulo ?? ''} />
                    </div>
                    <div className={styles.boxH2}>
                        <h2 className={styles.h2Styled}>{usuarioAutenticado.titulo}</h2>
                        <h2 className={styles.h2Styled}>{usuarioAutenticado.descricao}</h2>
                    </div>
                </div>
            )}
        </div>
    );

} 