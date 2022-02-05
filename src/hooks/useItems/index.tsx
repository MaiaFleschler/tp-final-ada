import { Movie } from "../../types";
import { api } from "../../utils";

const useItems = () => {
    const getItems = async (): Promise<Movie[]> => {
        const response = await api.get('/movie/top_rated');
        console.log(response.data.results)
        return response.data.results;
    }



    const getSearchedItems = async (): Promise<Movie[]> => {
        const params = new URLSearchParams(window.location.search);
        let query = params.get("query");
        const response = await api.get(`/search/multi?query=${query}`);
        console.log(response.data.results)
        return response.data.results;
    }

    return { getItems, getSearchedItems }
}

export { useItems }