import { MovieDBItem } from "../../types";
import { dataBase } from "../../utils";

const useDataBase = () => {

    const feedMovieDBItems = async (payload: MovieDBItem) => {
    try {
        await dataBase.post('/movie_db_items.json', payload);
    } catch(err){
        console.log(err);
    }
    }
    const getMovieDBItemsIds = async () => {
        const movieDBItemsIds:number[] = [];
        try {
            const response = await dataBase.get('/movie_db_items.json');
            Object.keys(response.data).map(function(key, index){
                movieDBItemsIds.push(response.data[key].id);
            })
            return movieDBItemsIds;
        } catch(err){
            console.log(err);
        }
        }

    return { feedMovieDBItems, getMovieDBItemsIds }
}
export { useDataBase }