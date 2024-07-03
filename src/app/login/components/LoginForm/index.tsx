'use client'
import { useState } from "react"
import { SignForm } from "../SignForm"
import { SignUpForm } from "../SignUpForm"
import { SubmitHandler, useForm } from "react-hook-form"
import { Form } from '@/components/ui/form'
import { LoginFormData } from "@/interfaces/loginForm.interface"
import { userLogin, userRegister } from "@/services/login.service"
import { zodResolver } from '@hookform/resolvers/zod'
import { registerFormSchema } from "@/schemas/registerFormSchema"
import { loginFormSchema } from "@/schemas/loginFormSchema"
import { useRouter } from "next/navigation"

interface LoginForm {
}

export const LoginForm = ({ }: LoginForm) => {
    const [showSignUpForm, setShowSignUpform] = useState(false)
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)
    const route = useRouter()
    const schema = showSignUpForm ? registerFormSchema : loginFormSchema
    const form = useForm(
        {
            resolver: zodResolver(schema),
        }
    )

    const openSignUpForm = () => { setShowSignUpform(true), form.reset() }

    const closeSignUpForm = () => { setShowSignUpform(false), form.reset() }

    const onSubmit: SubmitHandler<LoginFormData> = async (formData) => {
        try {
            const { user_confirm_password, user_email, user_name, user_password } = formData
            setIsLoadingSubmit(true)
            const data = showSignUpForm ? await userRegister({
                confirmPassword: user_confirm_password ?? '',
                email: user_email ?? '',
                name: user_name ?? '',
                password: user_password ?? ''
            }) : await userLogin({
                email: user_email ?? '',
                password: user_password ?? ''
            });

            if (data?.status === 200) {
                if (showSignUpForm) {
                    closeSignUpForm()
                    return
                }
                route.push('/')
            }
        } catch (error) {
            console.error(error);
            setIsLoadingSubmit(false)
        } finally {
            setIsLoadingSubmit(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => onSubmit(data)
            )} >
                {showSignUpForm
                    ? <SignUpForm closeSignUpForm={closeSignUpForm} isLoadingSubmit={isLoadingSubmit} />
                    : <SignForm openSignUpForm={openSignUpForm} isLoadingSubmit={isLoadingSubmit} />
                }
            </form>
        </Form >

    )
}