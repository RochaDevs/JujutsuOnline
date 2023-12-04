import { useQuery } from "@tanstack/react-query"
import { httpAdm } from "../http";
import { IAdm } from "../interfaces/IAdm";

export const useGetAdm = () => {
    return useQuery<IAdm[], Error>({
        queryKey: ['administrador'],
        queryFn: () => httpAdm.get('').then(resposta => resposta.data)
    });
};