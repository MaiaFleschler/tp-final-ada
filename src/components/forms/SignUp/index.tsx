import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from "./validation-schema";
import { FC } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUsers } from "../../../hooks";
import { SignupPayload } from "./types";

const defaultValues = {
    name: '',
    lastName:'',
    birthdate: '',
    email: '',
    password: '',
    sessionToken: ''
}

const SignUp: FC = () => {

    const { signUp } = useUsers();
    const { push } = useHistory()

    const {
        register,
        formState: { errors }, 
        handleSubmit,
     } = useForm<SignupPayload>({
        resolver: yupResolver(validationSchema),
        defaultValues,
    })

    
    const onSubmit = async (data:SignupPayload) => {
        try{
            await signUp({ ...data, role: 'user', viewed: [] })
            push("/login");
        } catch(err){
            console.log(err)
        }
    }
    

    return(
        <>
        <div className="formContainer">
        <div className="signUpFormContainer">
        <p className="formTitle">SignUp</p>
        <form action="" className="userForm" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" className="inputForm" placeholder="Name"
                {...register('name')}
                />
                {errors.name?.message}
                
            </div>
            <div>
                <input type="text" className="inputForm" placeholder="Lastname"
                {...register('lastName')}
                />
                {errors.lastName?.message}
                
            </div>
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
            <div>
                <input type="date" className="inputBirthdate" placeholder="Before"
                {...register('birthdate')}
                />
                
                {errors.birthdate?.message}
                
            </div>
            <button type="submit" className="submit">Sign Up</button>
            {alert}
        </form>
        <Link to='login' className="signUp-login">Login</Link><br />
        </div>
        </div>
    </>
    )
}

export { SignUp }