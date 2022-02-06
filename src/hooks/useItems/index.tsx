import { MovieDBItemData } from "../../types";
import { api } from "../../utils";

const useItems = () => {

    const getItems = async (): Promise<MovieDBItemData> => {
        const params = new URLSearchParams(window.location.search);
        let query = params.get("query");
        let page = params.get("page");
        let response;
        if(query=="" || query==undefined){
            response = await api.get(`/movie/top_rated?page=${page}`);
        } else {
            response = await api.get(`/search/multi?page=${page}&query=${query}`);
        }
        return response.data;
    }
    return { getItems }
}

export { useItems }