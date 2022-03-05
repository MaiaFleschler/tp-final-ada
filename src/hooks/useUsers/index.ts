import { useContext } from "react";
import { AuthContext } from "../../contexts";
import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { dataBase } from "../../utils";


const useUsers = () => {
    const { setUserSession } = useContext(AuthContext);

    type Payload = Omit<User, 'id' | 'sessionToken'>

    const signUp = async (payload: Payload) => {
        try {
            await dataBase.post('/users.json', payload);
        } catch(err){
            console.log(err);
        }
    }

    const getUsers = async () => {
        try {
            const response = await dataBase.get('/users.json');
            const array = [];
            for (const elem in response.data) {
                const user = response.data[elem];
                user['id'] = elem;
                array.push(user);
            }
            return array;
        } catch(err){
            console.log(err);
        }
    }

    const removeUser = async (id:string) => {
        try {
            await dataBase.delete(`/users/${id}.json`);
        } catch(err){
            console.log(err);
        }
    }

    const updateUserSession = async (userSessionId:string) => {
        try {
            const response = await dataBase.get('/users.json');
            const users: User[] = mapToArray(response.data);
            const user = users.find((user) => user.id === userSessionId);
            user && setUserSession(user);
        } catch(err){
            console.log(err);
        }
    }

    const setViewedItemsByUser = async (user: Partial<User>, movieDBItemId: number ) => {
        let viewed: number[]; 
        try{
            viewed = await user.viewed || [];
            await viewed.push(movieDBItemId);
            await dataBase.patch(`/users/${user.id}.json`, { viewed: viewed})
            user.id && updateUserSession(user.id);
        } catch(err) {
            console.log(err);
        }
    }

    const RemoveViewedItemsByUser = async (user: Partial<User>, movieDBItemId: number ) => {
        let viewed: number[]; 
        try{
            viewed = await user.viewed || [];
            let newArray = viewed.filter(elem => elem!== movieDBItemId)
            await dataBase.patch(`/users/${user.id}.json`, { viewed: newArray})
            user.id && updateUserSession(user.id);
        } catch(err) {
            console.log(err);
        }
    }

    const isViewed =  (user: Partial<User>, movieDBItemId: number | undefined) => {
        let viewed =  user.viewed || [];
        return (viewed.some((e:number) => e === movieDBItemId))
    }

    return { signUp, getUsers, removeUser, setViewedItemsByUser, isViewed, RemoveViewedItemsByUser }
}
export { useUsers }