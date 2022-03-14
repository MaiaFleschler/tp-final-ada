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
    const getVideosKeys = async (id:number, media_type:string): Promise<string[]>=> {
        let response;
        if(media_type==='movie'){
            response = await api.get(`/movie/${id}/videos`);
        } if(media_type==='tv') {
            response = await api.get(`/tv/${id}/videos`);
        }

        let keys: string[] = [];
        (response?.data.results).map((elem: any) => {
            keys.push(elem.key)
            return keys
        })

        return keys;
    }
    return { getItems, getVideosKeys }
}

export { useItems }