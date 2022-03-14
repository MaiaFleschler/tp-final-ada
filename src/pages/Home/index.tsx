import { FC, useEffect, useState } from 'react'
import { ItemCard } from '../../components/common/Card';
import { Layout } from '../../components/layout'
import { WithAuth } from '../../hoc';
import { useDataBase } from '../../hooks';
import { MovieDBItem } from '../../types';



const HomePage: FC = () => {
    const { feedMovieDBItems, getMovieDBItemsIds, movieDBItemsIds, removeDBItem, getDBItems } = useDataBase();
    const [dbItems,setDbItems] = useState<MovieDBItem[]>();


    useEffect(() => {
        getDBItems().then(response => {
            setDbItems(response);
        });
    }, [movieDBItemsIds]);


    return(
        <Layout>
            <div className='cardsContainer'>
                {dbItems?.map((dbItem:MovieDBItem) => (
                    <ItemCard
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
        </Layout>
    )
}

export const Home = WithAuth(HomePage)