import { useQuery } from "@tanstack/react-query"
import { IUsers } from "../interfaces/IUsers";
import { httpUsuarios } from "../http";

export const useGetUsuarios = () => {
    return useQuery<IUsers[], Error>({
        queryKey: ['usuarios'],
        queryFn: () => httpUsuarios.get('').then(resposta => resposta.data)
    });
};