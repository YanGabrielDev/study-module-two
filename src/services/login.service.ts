import { LoginData, RegisterData } from "@/interfaces/login.interface";
import { api } from "@/lib/api"

export const userLogin = async (data: LoginData) => {
    try {
        const response = await api.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/login`, data, {
            // withCredentials: true
        })
        return response
    } catch (error) {
        console.error(error);
    }
}

export const userRegister = async (data: RegisterData) => {
    try {
        const response = await api.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, data, {
            // withCredentials: true 
        })
        return response
    } catch (error) {
        console.error(error);
    }
}