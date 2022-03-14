import { FC, useEffect, useState } from 'react'
import { ItemCard } from '../../components/common/Card';
import { Layout } from '../../components/layout'
import { WithAuth } from '../../hoc';
import { useDataBase } from '../../hooks';
import { MovieDBItem } from '../../types';



const SeriesPage: FC = () => {
    const { feedMovieDBItems, getMovieDBItemsIds, movieDBItemsIds, removeDBItem, getDBSeries } = useDataBase();
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

export const Series = WithAuth(SeriesPage)