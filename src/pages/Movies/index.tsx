import { FC, useEffect, useState } from 'react'
import { UserCard } from '../../components/common/UserCard';
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
                <UserCard
                    dbItem = {dbMovie}
                    key={dbMovie.id}
                />
            ))}
            </div>
        </Layout>
    )
}

export {  Movies }