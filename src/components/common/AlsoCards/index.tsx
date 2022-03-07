import { FC, useEffect, useState } from "react";
import { useDataBase } from "../../../hooks";
import { MovieDBItem } from "../../../types";
import { ItemCard } from "../Card";


const AlsoCards: FC = () => {
    const { feedMovieDBItems, getMovieDBItemsIds, movieDBItemsIds, removeDBItem, getDBItems } = useDataBase();
    const [dbItems,setDbItems] = useState<MovieDBItem[]>();

    const params = new URLSearchParams(window.location.search);
    let id = params.get("id");


    useEffect(() => {
        getDBItems().then(response => {
            let dbItemsNoActual = response?.filter(e => e.id !== Number(id))
            setDbItems(dbItemsNoActual);
        });
    }, [movieDBItemsIds]);


    return(
        <>
            <div className="alsoTitle">Also...</div>
            <div className='cardsContainer'>
            {dbItems?.map((dbItem:MovieDBItem) => (
                <ItemCard 
                    hideButton
                    movieDBItem={dbItem}
                    key={dbItem.id} 
                    feedMovieDBItems={feedMovieDBItems}
                    getMovieDBItemsIds={getMovieDBItemsIds}
                    isIntoDB={true}
                    removeDBItem={removeDBItem}
                    movieDBItemsIds={movieDBItemsIds}
                />
            ))}
            </div>
        </>
    )
}

export { AlsoCards }