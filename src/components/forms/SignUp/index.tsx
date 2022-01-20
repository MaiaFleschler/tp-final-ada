import { FC, FormEvent, useState } from "react"
import { signUp } from "./api";

const defaultValues = {
    name: '',
    lastName:'',
    birthdate: '',
    email: '',
    password: '',
    sessionToken: ''
}

const SignUp: FC = () => {

    const [inputs, setInputs] = useState(defaultValues);

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        signUp(inputs);
    }
    

    return(
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre  </label>
                <input type="text" name="name" id="name" value={inputs.name} onChange={(e) => setInputs({...inputs, name: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="lastName">Apellido  </label>
                <input type="text" name="lastName" id="lastName" value={inputs.lastName} onChange={(e) => setInputs({...inputs, lastName: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="birthdate">Fecha de nacimiento  </label>
                <input type="date" name="birthdate" id="birthdate" value={inputs.birthdate} onChange={(e) => setInputs({...inputs, birthdate: e.target.value})} />
            </div>
            <div>
                <label htmlFor="email">Email  </label>
                <input type="email" name="email" id="email" value={inputs.email} onChange={(e) => setInputs({...inputs, email: e.target.value})} />
            </div>
            <div>
                <label htmlFor="password">Contraseña  </label>
                <input type="password" name="password" id="password" value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})} />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export { SignUp }