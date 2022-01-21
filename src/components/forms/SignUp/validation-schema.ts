import * as yup from 'yup'

export const validationSchema = yup.object().shape({
    name: yup.string()
        .required("Campo requerido"),
    lastName: yup.string()
        .required("Campo requerido"),
    birthdate: yup.string()
        .required("Campo requerido"),
    email: yup.string()
        .email("Correo electronico invalido")
        .required("Campo requerido"),
    password: yup.string()
        .min(6, 'Minimo 6 caracteres')
        .required("Campo requerido")
})