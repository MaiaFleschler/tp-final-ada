import { FC, useEffect, useState } from 'react'
import { Layout } from '../../components/layout'
import { useItems } from '../../hooks/useItems'
import { Movie } from '../../types';


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
            {topRatedMovies?.map((topRatedMovie) => (
                <div key={topRatedMovie.id}>{topRatedMovie.title}</div>
            ))}
        </Layout>
    )
}

export {  Admin }