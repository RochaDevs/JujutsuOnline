import { useQuery } from "@tanstack/react-query"
import ICapitulos from "../interfaces/ICapitulos";
import { httpCapitulos } from "../http";

export const useGetCapitulos = (id?: string) => {
    return useQuery<ICapitulos | ICapitulos[], Error>({
        queryKey: id ? ['capitulos', id] : ['capitulos'],
        queryFn: () => {
            if(id) {
                return httpCapitulos.get(`/${id}`).then((resposta) => resposta.data)
            } else {
                return httpCapitulos.get('').then(resposta => resposta.data)}
        },
        enabled: id !== undefined, // Executa automaticamente se id for fornecido
    });
};