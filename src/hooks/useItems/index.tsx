import { MovieDBItem } from "../../types";
import { api } from "../../utils";

const useItems = () => {
    const params = new URLSearchParams(window.location.search);
    let query = params.get("query");

    const getItems = async (): Promise<MovieDBItem[]> => {
        let response;
        let results;
        if(query=="" || query==undefined){
            response = await api.get('/movie/top_rated');
            results = response.data.results
        } else {
            response = await api.get(`/search/multi?query=${query}`);
            results = (response.data.results).filter((element:MovieDBItem) => element.media_type === "movie" || element.media_type === "tv");
        }
        return results;
    }
    return { getItems }
}

export { useItems }