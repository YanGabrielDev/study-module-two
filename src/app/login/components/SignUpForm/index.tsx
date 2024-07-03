import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { Loader2 } from "lucide-react"

interface SignUpFormProps {
    closeSignUpForm: () => void;
    isLoadingSubmit: boolean;
}

export const SignUpForm = ({ closeSignUpForm, isLoadingSubmit }: SignUpFormProps) => {
    const form = useFormContext();
    const formFields = ['user_name', 'user_email', 'user_password', 'user_confirm_password']
    const placeholdersFields: Record<string, string> = {
        user_name: 'Nome',
        user_email: 'E-mail',
        user_password: 'Senha',
        user_confirm_password: 'Confirmação de senha'
    }

    return (
        <div className={`w-full flex gap-4 flex-col min-w-80`}>
            <h1 className="font-bold text-white text-5xl">Registrar</h1>
            <h2 className="text-white text-base opacity-70 font-medium">Registre sua conta</h2>

            {formFields.map(fieldName => (
                <FormField
                    key={fieldName}
                    control={form.control}
                    name={fieldName}
                    rules={{ required: "Campo obrigatório!" }}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder={placeholdersFields[fieldName]}
                                    type={fieldName.includes('password') ? 'password' : 'text'}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            ))}

            <Button disabled={isLoadingSubmit} type="submit">
                {isLoadingSubmit && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                <span className="font-normal text-white">Registrar</span>
            </Button>

            <div className={`flex w-full justify-between items-center absolute bottom-10 max-w-80`}>
                <span className="text-white text-base opacity-50 font-normal">Já possui conta?</span>
                <Button variant="secondary" onClick={closeSignUpForm}>
                    <span className="font-normal text-white">Faça login</span>
                </Button>
            </div>
        </div>
    );
};

