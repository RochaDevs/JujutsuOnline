import { createContext, useState, useEffect, useContext } from "react";

interface IUsuarioEstaLogado {
    usuarioEstaLogado: boolean
    setUsuarioEstaLogado: (usuarioEstado: boolean) => void;
}

interface Ichildren {
    children: React.ReactNode
}

const UsuarioEstaLogadoContext = createContext<IUsuarioEstaLogado | undefined>(undefined);

export const UsuarioEstaLogadoProvider = ({children}: Ichildren) => {
    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        setUsuarioEstaLogado(token !== null)
    }, [])

    const value = {
        usuarioEstaLogado,
        setUsuarioEstaLogado
    }

    return <UsuarioEstaLogadoContext.Provider value={value}>{children}</UsuarioEstaLogadoContext.Provider>
}

export const useUsuarioEstaLogadoContextAPI = () => {
    const context = useContext(UsuarioEstaLogadoContext)

    if (context === undefined) {
        throw new Error('useUsuarioEstaLogadoContextAPI must be used within a UsuarioEstaLogadoProvider');
    }

    return context;
}