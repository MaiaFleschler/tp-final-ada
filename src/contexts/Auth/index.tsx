import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { User } from "../../types";

type ContextType = {
    userSession?: Partial<User>,
    setUserSession: Dispatch<SetStateAction<Partial<User> | undefined>>
}

const AuthContext = createContext<ContextType>({
    userSession: {},
    setUserSession: () => undefined
});

const AuthProvider: FC = ({children}) => {

    const [userSession, setUserSession] = useState<Partial<User> | undefined>();

    return(
        <AuthContext.Provider value={{ userSession, setUserSession }}>
            {children}
        </AuthContext.Provider>
        
    )
}

export { AuthContext, AuthProvider } 