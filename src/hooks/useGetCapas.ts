import { useQuery } from "@tanstack/react-query"
import ICapas from "../interfaces/ICapas"
import { httpCapas } from "../http"

const useGetCapas = () => {
    return useQuery<ICapas[], Error>({
        queryKey: ['capas'],
        queryFn: () => httpCapas.get('').then(resposta => resposta.data)
    });
};


export default useGetCapas