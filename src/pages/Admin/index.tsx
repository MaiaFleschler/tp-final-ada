import { FC, useEffect, useState } from 'react'
import { MediaCard } from '../../components/common/Card';
import { Layout } from '../../components/layout'
import { useItems } from '../../hooks/useItems'
import { Movie } from '../../types';
import './style.css'


const Admin: FC = () => {

    const [topRatedMovies,setTopRatedMovies] = useState<Movie[]>();

    const { getItems } = useItems();

    useEffect(() => {
        getItems().then(response => {
            setTopRatedMovies(response)
        });
      }, []);
    
    return(
        <Layout>
            <div className='cardsContainer'>
            {topRatedMovies?.map((topRatedMovie) => (
                <MediaCard 
                    img={'https://image.tmdb.org/t/p/w200/'+topRatedMovie.poster_path} 
                    title={topRatedMovie.title}
                    voteAverage={topRatedMovie.vote_average}
                    key={topRatedMovie.id}
                />
            ))}
            </div>
        </Layout>
    )
}

export {  Admin }