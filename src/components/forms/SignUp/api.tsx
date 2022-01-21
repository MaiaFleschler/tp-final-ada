import { User } from "../../../types";
import { dataBase } from "../../../utils"

type Payload = Omit<User, 'id' | 'sessionToken'>

const signUp = async (payload: Payload) => {
    try {
        const response = await dataBase.post('/users.json', payload);
        console.log(response);
    } catch(err){
        console.log(err);
    }
}

export { signUp }