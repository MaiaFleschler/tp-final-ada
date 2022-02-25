import { FC, useEffect, useState } from 'react'
import { ItemCard } from '../../components/common/Card';
import { Layout } from '../../components/layout'
import { useDataBase } from '../../hooks';
import { MovieDBItem } from '../../types';



const Series: FC = () => {
    const { feedMovieDBItems, getMovieDBItemsIds, movieDBItemsIds, removeDBItem } = useDataBase();

    const { getDBSeries } = useDataBase();
    const [dbSeries, setDbSeries] = useState<MovieDBItem[]>();


    useEffect(() => {
        getDBSeries().then(response => {
            setDbSeries(response);
        });
    }, [movieDBItemsIds]);


    return(
        <Layout>
            <div className='cardsContainer'>
            {dbSeries?.map((dbSerie:MovieDBItem) => (
                <ItemCard
                    movieDBItem={dbSerie}
                    key={dbSerie.id} 
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

export { Series }