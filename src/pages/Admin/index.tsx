import { FC, useEffect, useState } from 'react'
import { MediaCard } from '../../components/common/Card';
import { Searcher } from '../../components/common/Searcher';
import { Layout } from '../../components/layout'
import { useItems } from '../../hooks/useItems'
import { MovieDBItem } from '../../types';
import './style.css'


const Admin: FC = () => {

    const [movieDBItems,setMovieDBItems] = useState<MovieDBItem[]>();


    const params = new URLSearchParams(window.location.search);
    let query = params.get("query");
    

    const { getItems } = useItems();

    useEffect(() => {
        getItems().then(response => {
            setMovieDBItems(response)
        });
      }, [query]);

      let title: any;
    
    return(
        <Layout>
            <Searcher />
            <div className='cardsContainer'>
            {movieDBItems?.map((movieDBItem) => (
                <MediaCard
                    img={movieDBItem.poster_path} 
                    {...movieDBItem.media_type===undefined || movieDBItem.media_type==='movie'
                    ?title=movieDBItem.title
                    :title=movieDBItem.name
                    }
                    title={title}
                    voteAverage={movieDBItem.vote_average}
                    key={movieDBItem.id}
                />
            ))}
            </div>
        </Layout>
    )
}

export {  Admin }