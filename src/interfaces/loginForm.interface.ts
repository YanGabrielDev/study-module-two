import { FieldValues } from "react-hook-form";

export interface LoginFormData extends FieldValues {
    user_name?: string,
    user_email?: string,
    user_password?: string,
    user_confirm_password?: string
}

