import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { dataBase } from "../../utils";


const useAuth = () => {
    const [tokenStorage, setTokenStorage] = useState<string | undefined> (
        localStorage.getItem("user-token") || undefined
        );
    const { setUserSession } = useContext(AuthContext)


    const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean>();

    const { push } = useHistory()


    useEffect(() => {
        if(tokenStorage) localStorage.setItem("user-token", tokenStorage)
    }, [tokenStorage]);

    useEffect(() => {
        loginWithToken();
        // eslint-disable-next-line
    }, []); 

 
    const createUserToken = async (user: User): Promise<string | null> => {
        const randomToken = require('random-token');
        const newToken = randomToken(16)
        try{
            await dataBase.patch(`/users/${user.id}.json`, { sessionToken: newToken})
            return newToken;
        } catch(err) {
            return null;
        }
        
    }


    const login = async (email: string, password: string) => {
        try {
            const response = await dataBase.get('/users.json');
            if(!response.data) throw new Error('No se pudo conectar a la base de datos')
  
            const users: User[] = mapToArray(response.data);
    
            const user = users.find((user) => {
                if(user.email === email && user.password === password) {
                    return user;
                } return false;
            });
    
            if(user) {
                const token = await createUserToken(user)
                if(token) {
                    setTokenStorage(token);
                    push("/");
                    setUserSession(user);
                    setHasUserLoggedIn(true);
                } else {
                    setHasUserLoggedIn(false);
                }
            } else {
                throw new Error('El usuario no existe')
            }
    
        } catch(err){
            throw String(err)
        }
        
    }



    const loginWithToken = async () => {
        try {
            const response = await dataBase.get('/users.json');
  
            const users: User[] = mapToArray(response.data);
    
            const user = users.find(
                (user) => user.sessionToken === tokenStorage && user.sessionToken
            );
    
            if(user) {
                setUserSession(user);
                setHasUserLoggedIn(true);
            } else {
                setHasUserLoggedIn(false);
            }
    
        } catch(err){
            console.log(err);
        }

    };

    const logOut = () => {
        localStorage.removeItem('user-token');
        setHasUserLoggedIn(false);
        setUserSession(undefined);
        push('/login');
    };

    return { login, loginWithToken, hasUserLoggedIn, logOut }
}
export { useAuth }