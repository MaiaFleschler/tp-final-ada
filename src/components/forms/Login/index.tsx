import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from "./validation-schema";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

export const defaultValues = {
    email:'',
    password:''
}

const Login: FC = () => {


    const { login } = useAuth();
    const [error, setError] = useState('');


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
            setError(String(err))
        }
    }

    return(
        <>
        <div className="formContainer">
        <div className="loginFormContainer">
        <p className="formTitle">Login</p>
        <form action="" className="userForm" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" className="inputForm" placeholder="Email"
                {...register('email')}
                />
                {errors.email?.message}
                
            </div>
            <div>
                <input type="password" className="inputForm" placeholder="Password"
                {...register('password')}
                />
                {errors.password?.message}
            </div>
            <div>{error}</div>
            <button type="submit" className="submit">Login</button>
        </form>
        <Link to='signUp' className="signUp-login">Sign up</Link><br />
        </div>
        </div>
        </>
    )

}

export { Login }