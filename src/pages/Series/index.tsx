import { FC, useEffect, useState } from 'react'
import { ItemCard } from '../../components/common/Card';
import { Layout } from '../../components/layout'
import { useDataBase } from '../../hooks';
import { MovieDBItem } from '../../types';



const Series: FC = () => {
    const { getDBSeries } = useDataBase();
    const [dbSeries, setDbSeries] = useState<MovieDBItem[]>();


    useEffect(() => {
        getDBSeries().then(response => {
            setDbSeries(response);
        });
    }, []);


    return(
        <Layout>
            <div className='cardsContainer'>
            {dbSeries?.map((dbSerie:MovieDBItem) => (
                <ItemCard
                    movieDBItem={dbSerie}
                    key={dbSerie.id} 
                    feedMovieDBItems={function (movie: MovieDBItem): void {
                        throw new Error('Function not implemented.');
                    } } getMovieDBItemsIds={function (): void {
                        throw new Error('Function not implemented.');
                    } } isIntoDB={false} removeDBItem={function (id: string): void {
                        throw new Error('Function not implemented.');
                    } } movieDBItemsIds={[]}
                />
            ))}
            </div>
        </Layout>
    )
}

export { Series }