import { MovieDBItem } from "../../types";
import { dataBase } from "../../utils";

const useDataBase = () => {

    const feedMovieDBItems = async (payload: MovieDBItem) => {
    try {
        const response = await dataBase.post('/movie_db_items.json', payload);
        console.log(response);
    } catch(err){
        console.log(err);
    }
    }

    return { feedMovieDBItems }
}
export { useDataBase }