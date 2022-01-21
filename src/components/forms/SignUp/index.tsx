import { signUp } from "./api";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from "./validation-schema";
import { FC } from "react";

const defaultValues = {
    name: '',
    lastName:'',
    birthdate: '',
    email: '',
    password: '',
    sessionToken: ''
}


const SignUp: FC = () => {

    const {
        register,
        formState: { errors }, 
        handleSubmit,
     } = useForm<{ name: string; lastName: string; birthdate: string; email: string; password: string }>({
        resolver: yupResolver(validationSchema),
        defaultValues,
    })

    
    const onSubmit = async (data: { name: string; lastName: string; birthdate: string; email: string; password: string }) => {
        try{
            await signUp({ name: data.name, lastName: data.lastName, birthdate: data.birthdate, email: data.email, password: data.password })
        } catch(err){
            console.log(err)
        }
    }
    

    return(
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name  </label>
                <input type="text" 
                {...register('name')}
                />
                {errors.name?.message}
                
            </div>
            <div>
                <label htmlFor="lastName">Last name  </label>
                <input type="text" 
                {...register('lastName')}
                />
                {errors.lastName?.message}
                
            </div>
            <div>
                <label htmlFor="birthdate">Birthdate  </label>
                <input type="date" 
                {...register('birthdate')}
                />
                {errors.birthdate?.message}
                
            </div>
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
            <button type="submit">Sign Up</button>
            {alert}
        </form>
    )
}

export { SignUp }