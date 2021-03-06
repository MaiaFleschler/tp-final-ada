import { useEffect, useState } from "react";
import { MovieDBItem } from "../../types";
import { dataBase } from "../../utils";

const useDataBase = () => {

    const [movieDBItemsIds, setMovieDBItemsIds] = useState<{ apiID: number; dbId: string; }[]>([])

    const feedMovieDBItems = async (payload: MovieDBItem) => {
        try {
            await dataBase.post('/movie_db_items.json', payload);
        } catch(err){
            console.log(err);
        }
    }


    const getMovieDBItemsIds = async () => {
        const movieDBItemsIdsArray:{ apiID: number; dbId: string; }[]= [];
        try {
            const response = await dataBase.get('/movie_db_items.json');
            Object.keys(response.data).map(key =>
                movieDBItemsIdsArray.push({apiID: response.data[key].id, dbId: key})
            );
            setMovieDBItemsIds(movieDBItemsIdsArray);
        } catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getMovieDBItemsIds()
    },[])

    const removeDBItem = async (id:string) => {
        try {
            await dataBase.delete(`/movie_db_items/${id}.json`);
        } catch(err){
            console.log(err);
        }
    }

    const getDBItems = async () => {
        try {
            const response = await dataBase.get('/movie_db_items.json');
            const array = [];
            for (const elem in response.data) {
                array.push(response.data[elem])
            }
            return array;
        } catch(err){
            console.log(err);
        }
    }
    const getDBMovies = async () => {
        try {
            const response = await dataBase.get('/movie_db_items.json');
            const array = [];
            for (const elem in response.data) {
                if(response.data[elem].media_type === 'movie') {
                    array.push(response.data[elem])
                }
            }
            return array;
        } catch(err){
            console.log(err);
        }
    }
    const getDBSeries = async () => {
        try {
            const response = await dataBase.get('/movie_db_items.json');
            const array = [];
            for (const elem in response.data) {
                if(response.data[elem].media_type === 'tv') {
                    array.push(response.data[elem])
                }
            }
            return array;
        } catch(err){
            console.log(err);
        }
    }

    const getDBItem = async (id:number) => {
        try {
            const response = await dataBase.get('/movie_db_items.json');
            let item;
            for (const elem in response.data) {
                if(response.data[elem].id === id) {
                    item = response.data[elem]
                }
            }
            return item;
        } catch(err){
            console.log(err);
        }
    }

    return { feedMovieDBItems, getMovieDBItemsIds, movieDBItemsIds, removeDBItem, getDBItems, getDBMovies, getDBSeries, getDBItem }
}
export { useDataBase }