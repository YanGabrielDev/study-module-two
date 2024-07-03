import { api } from "@/lib/api";


export const getTasks = async () => {

    try {
        const response = await api.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks`);
        return response.data;  // Supondo que você queira retornar os dados da resposta
    } catch (error) {
        console.error(error);
        window.location.href = '/login';
        throw error;  // Relança o erro para que seja capturado onde a função getTasks é chamada
    }
};
