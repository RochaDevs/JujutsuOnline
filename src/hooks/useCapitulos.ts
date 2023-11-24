import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
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
    });
};

export const useDeleteCapitulo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (capituloAhSerExcluido: string | undefined) => httpCapitulos.delete(`/${capituloAhSerExcluido}`),
        onSuccess: () => {
            // Invalida a query de capas para forçar uma atualização
            queryClient.invalidateQueries({ queryKey: ['capitulos'] });

            alert('Capítulo deletado com sucesso');
        },
    });
};

export const usePutCapitulo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (dados: {capituloAhSerEditado: ICapitulos, paramsID: string}) => httpCapitulos.put(`/${dados.paramsID}`, dados.capituloAhSerEditado),
        onSuccess: () => {
            // Invalida a query de capas para forçar uma atualização
            queryClient.invalidateQueries({ queryKey: ['capitulos'] });

            alert('Capítulo atualizado com sucesso');
        },
    });
};

export const usePostCapitulo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (dados: ICapitulos) => httpCapitulos.post('', dados),
        onSuccess: () => {
            // Invalida a query de capas para forçar uma atualização
            queryClient.invalidateQueries({ queryKey: ['capitulos'] });

            alert('Capítulo adicionada com sucesso');
        },
    });
};