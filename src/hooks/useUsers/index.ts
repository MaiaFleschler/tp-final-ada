import { User } from "../../types";
import { dataBase } from "../../utils";

const useUsers = () => {
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
    return { signUp, getUsers, removeUser }
}
export { useUsers }