import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { httpCapas } from '../http';
import ICapas from '../interfaces/ICapas';

export const useGetCapas = (id?: string) => {
    return useQuery<ICapas | ICapas[], Error>({
        queryKey: id ? ['capas', id] : ['capas'],
        queryFn: () => {
            if (id) {
                return httpCapas.get(`/${id}`).then(resposta => resposta.data);
            } else {
                return httpCapas.get('').then(resposta => resposta.data);
            }
        }
    });
};

export const useDeleteCapa = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (capaAhSerExcluida: string) => httpCapas.delete(`/${capaAhSerExcluida}`),
        onSuccess: () => {
            // Invalida a query de capas para forçar uma atualização
            queryClient.invalidateQueries({ queryKey: ['capas'] });

            alert('Capa excluída com sucesso');
        },
    });
};

export const usePutCapa = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (dados: {capaAhSerEditada: ICapas, paramsID: string}) => httpCapas.put(`/${dados.paramsID}`, dados.capaAhSerEditada),
        onSuccess: () => {
            // Invalida a query de capas para forçar uma atualização
            queryClient.invalidateQueries({ queryKey: ['capas'] });

            alert('Capa atualizada com sucesso');
        },
    });
};

export const usePostCapa = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (dados: ICapas) => httpCapas.post('', dados),
        onSuccess: () => {
            // Invalida a query de capas para forçar uma atualização
            queryClient.invalidateQueries({ queryKey: ['capas'] });

            alert('Capa adicionada com sucesso');
        },
    });
};