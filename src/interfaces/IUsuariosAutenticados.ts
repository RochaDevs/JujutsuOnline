export interface IUsuariosAutenticados {
    id: string,
    nomeCompleto: string,
    email: string,
    senha: string,
    confirmacaoSenha: string,
    titulo: string | null,
    descricao: string | null,
    url: string | null,
    volume: string | null
}