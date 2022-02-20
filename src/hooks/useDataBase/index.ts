import { useEffect, useState } from "react";
import { MovieDBItem } from "../../types";
import { dataBase } from "../../utils";

const useDataBase = () => {

    const [movieDBItemsIds, setMovieDBItemsIds] = useState<string[]>()

    const feedMovieDBItems = async (payload: MovieDBItem) => {
    try {
        await dataBase.post('/movie_db_items.json', payload);
    } catch(err){
        console.log(err);
    }
    }


    const getMovieDBItemsIds = async () => {
        const movieDBItemsIdsArray:string[]= [];
        try {
            const response = await dataBase.get('/movie_db_items.json');
            Object.keys(response.data).map(key =>
                movieDBItemsIdsArray.push(String(response.data[key].id)))
            setMovieDBItemsIds(movieDBItemsIdsArray);
        } catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getMovieDBItemsIds()
    },[])

    return { feedMovieDBItems, getMovieDBItemsIds, movieDBItemsIds }
}
export { useDataBase }