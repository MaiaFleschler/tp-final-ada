import * as yup from 'yup'

export const validationSchema = yup.object().shape({
    email: yup.string()
        .email("Correo electronico invalido")
        .required("Campo requerido"),
    password: yup.string()
        .required("Campo requerido")
})