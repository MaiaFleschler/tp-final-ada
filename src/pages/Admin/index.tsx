import { Pagination } from '@mui/material';
import { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { MediaCard } from '../../components/common/Card';
import { Searcher } from '../../components/common/Searcher';
import { Layout } from '../../components/layout'
import { useItems } from '../../hooks'
import { MovieDBItem } from '../../types';
import './style.css'

const Admin: FC = () => {
    
    const params = new URLSearchParams(window.location.search);
    let query = params.get("query");
    
    const [page, setPage] = useState<number>(Number(params.get("page")) || 1);

    const { push } = useHistory()
    useEffect(() => {
        push(`/admin?query=${query==null?query="":query}&page=${page}`)
      }, [page]);

    const [movieDBItems,setMovieDBItems] = useState<MovieDBItem[]>();

    const { getItems } = useItems();
    const [totalPages, setTotalPages] = useState<number>();

    useEffect(() => {
            getItems().then(response => {
            setTotalPages(response.total_pages);
            //Filter not showing people from multi/search
            let items;
            query==="" || query===undefined?
            items = response.results:
            items = (response.results).filter((element:MovieDBItem) => element.media_type === "movie" || element.media_type === "tv")
            setMovieDBItems(items);
        });
      }, [query, page]);
      
      
      const handlePageChange = (event:any, value:any) => {
        setPage(value);
      }
    
    return(
        <Layout>
            <Searcher />
            <div className='cardsContainer'>
            {movieDBItems?.map((movieDBItem) => (
                <MediaCard
                    movieDBItem = {movieDBItem}
                    key={movieDBItem.id}
                />
            ))}
            </div>
            <Pagination count={totalPages} page={page} onChange={handlePageChange} variant="outlined" defaultPage={1} boundaryCount={0} showFirstButton showLastButton className='pagination' color='primary'/>
        </Layout>
    )
}

export {  Admin }