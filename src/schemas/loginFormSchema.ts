import { z } from 'zod';

export const loginFormSchema = z.object({
    user_email: z.string({ required_error: "Campo obrigatório!" }).email({ message: 'Email inválido' }),
    user_password: z.string({ required_error: "Campo obrigatório!" }).min(8, { message: "A senha precisa ter pelo menos 8 digitos." }).max(25, { message: "A senha ultrapassou o limite de caracteres" })
})