import { FC, useEffect, useState } from 'react'
import { ItemCard } from '../../components/common/Card';
import { Layout } from '../../components/layout'
import { WithAuth } from '../../hoc';
import { useDataBase } from '../../hooks';
import { MovieDBItem } from '../../types';



const MoviesPage: FC = () => {
    const { feedMovieDBItems, getMovieDBItemsIds, movieDBItemsIds, removeDBItem } = useDataBase();

    const { getDBMovies } = useDataBase();
    const [dbMovies, setDbMovies] = useState<MovieDBItem[]>();


    useEffect(() => {
        getDBMovies().then(response => {
            setDbMovies(response);
        });
    }, [movieDBItemsIds]);


    return(
        <Layout>
            <div className='cardsContainer'>
            {dbMovies?.map((dbMovie:MovieDBItem) => (
                <ItemCard
                    movieDBItem={dbMovie}
                    key={dbMovie.id} 
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

export const Movies = WithAuth(MoviesPage)