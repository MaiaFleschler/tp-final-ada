import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from "./validation-schema";
import { FC } from "react";
import { Link } from "react-router-dom";

export const defaultValues = {
    email:'',
    password:''
}

const Login: FC = () => {


    const { login } = useAuth();


    const {
        register,
        formState: { errors }, 
        handleSubmit,
     } = useForm<{ email: string; password: string }>({
        resolver: yupResolver(validationSchema),
        defaultValues,
    })

    const onSubmit = async (data: { email: string; password: string }) => {
        try{
            await login(data.email, data.password);
        } catch(err){
            console.log(err)
        }
    }

    return(
        <>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Email  </label>
                <input type="text" 
                {...register('email')}
                />
                {errors.email?.message}
                
            </div>
            <div>
                <label htmlFor="password">Contraseña  </label>
                <input type="password" 
                {...register('password')}
                />
                {errors.password?.message}
            </div>
            <button type="submit">Login</button>
            {alert}
        </form>
        <Link to='signUp'>Sign up</Link><br />
        </>
    )

}

export { Login }