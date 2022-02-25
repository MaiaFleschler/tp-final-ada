import { FC, useEffect, useState } from 'react'
import { ItemCard } from '../../components/common/Card';
import { Layout } from '../../components/layout'
import { useDataBase } from '../../hooks';
import { MovieDBItem } from '../../types';



const Movies: FC = () => {
    const { getDBMovies } = useDataBase();
    const [dbMovies, setDbMovies] = useState<MovieDBItem[]>();


    useEffect(() => {
        getDBMovies().then(response => {
            setDbMovies(response);
        });
    }, []);


    return(
        <Layout>
            <div className='cardsContainer'>
            {dbMovies?.map((dbMovie:MovieDBItem) => (
                <ItemCard
                    movieDBItem={dbMovie}
                    key={dbMovie.id} 
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

export {  Movies }