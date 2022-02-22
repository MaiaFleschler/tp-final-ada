import { FC, useEffect, useState } from 'react'
import { UserCard } from '../../components/common/UserCard';
import { Layout } from '../../components/layout'
import { useDataBase } from '../../hooks';
import { MovieDBItem } from '../../types';



const Home: FC = () => {
    const { getDBItems } = useDataBase();
    const [dbItems,setDbItems] = useState<MovieDBItem[]>();


    useEffect(() => {
        getDBItems().then(response => {
            setDbItems(response);
        });
    }, []);


    return(
        <Layout>
            <div className='cardsContainer'>
            {dbItems?.map((dbItem:MovieDBItem) => (
                <UserCard
                    dbItem = {dbItem}
                    key={dbItem.id}
                />
            ))}
            </div>
        </Layout>
    )
}

export {  Home }