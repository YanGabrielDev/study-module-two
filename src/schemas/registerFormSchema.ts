import { z } from "zod";

export const registerFormSchema = z.object({
    user_name: z.string({ required_error: "Campo obrigatório!" }),
    user_email: z.string({ required_error: "Campo obrigatório!" }).email({ message: 'Email inválido' }),
    user_password: z.string({ required_error: "Campo obrigatório!" })
        .min(8, { message: "A senha precisa ter pelo menos 8 digitos." })
        .max(25, { message: "A senha ultrapassou o limite de caracteres" }),
    user_confirm_password: z.string({ required_error: "Campo obrigatório!" })
        .min(8, { message: "A senha precisa ter pelo menos 8 digitos." })
        .max(25, { message: "A senha ultrapassou o limite de caracteres" })
}).refine((value) => value.user_password === value.user_confirm_password, {
    message: "As senhas precisam ser iguais",
    path: ['user_confirm_password']
})