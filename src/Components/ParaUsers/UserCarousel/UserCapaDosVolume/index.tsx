import { NavLink } from "react-router-dom"
import styles from './CapaVolume.module.scss'
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import { httpUsuarios } from "../../../../http"
import { useUsuarioEstaLogadoContextAPI } from "../../../../hooks/useUsuarioEstaLogado"

interface ICapaVolume {
    titulo: string
    descricao: string
    url: string
    volume: string
}


function CapaVolume({ titulo, descricao, url, volume }: ICapaVolume) {

    const token = sessionStorage.getItem('token')
    const {usuarioEstaLogado} = useUsuarioEstaLogadoContextAPI()
    const [favoritado, setFavoritado] = useState<boolean>(false);

    function aoClicarNoBotao() {
        const novoEstadoFavoritado = !favoritado;
        setFavoritado(novoEstadoFavoritado);
        localStorage.setItem(`${titulo}-favoritado`, novoEstadoFavoritado.toString())

        const dadosUsuario = novoEstadoFavoritado ? { titulo, descricao, url, volume } : { titulo: null, descricao: null, url: null, volume: null };

        httpUsuarios.put(`${token}`, dadosUsuario)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });
    }

    useEffect(() => {
        const estadoFavoritadoSalvo = localStorage.getItem(`${titulo}-favoritado`)
        if (estadoFavoritadoSalvo !== null) {
            setFavoritado(estadoFavoritadoSalvo === 'true')
        }
    },[titulo])

    return (
        <div className={styles.divStyled}>
            <NavLink className={styles.navLinkStyled} to={`volumes/${volume}`}>
                <img className={styles.imgStyled} src={url} alt={titulo} />
            </NavLink>
            <div className={styles.boxH2}>
                <h2 className={styles.h2Styled}>{titulo}</h2>
                <h2 className={styles.h2Styled}>{descricao}</h2>
                {usuarioEstaLogado && (
                    <Button onClick={aoClicarNoBotao} color="error" sx={{margin: '.5rem'}}>
                        {favoritado ? "FAVORITADO!" : "Favoritar"}
                    </Button>
                )}
            </div>
        </div>
    )
}

export default CapaVolume