import * as yup from "yup";
export const passwordSchema = yup.object({
    password: yup.string().min(4, "minimum length is 4").max(16, "max length is 16 ")
})