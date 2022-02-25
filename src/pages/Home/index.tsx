import { FC, useEffect, useState } from 'react'
import { ItemCard } from '../../components/common/Card';
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
                <ItemCard
                    movieDBItem={dbItem}
                    key={dbItem.id} 
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

export {  Home }