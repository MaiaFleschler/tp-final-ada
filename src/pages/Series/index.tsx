import { FC, useEffect, useState } from 'react'
import { UserCard } from '../../components/common/UserCard';
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
                <UserCard
                    dbItem = {dbSerie}
                    key={dbSerie.id}
                />
            ))}
            </div>
        </Layout>
    )
}

export { Series }