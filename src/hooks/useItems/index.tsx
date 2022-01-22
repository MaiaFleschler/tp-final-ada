import { Movie } from "../../types";
import { api } from "../../utils";

const useItems = () => {
    const getItems = async ()/*: Promise<Movie[]>*/ => {
        const response = await api.get('/top_rated');
        console.log(response.data.results)
        return response.data.results;
    }
    return { getItems }
}

export { useItems }