import { Pagination } from '@mui/material';
import { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { ItemCard } from '../../components/common/Card';
import { Searcher } from '../../components/common/Searcher';
import { Layout } from '../../components/layout'
import { WithAuth } from '../../hoc';
import { useDataBase, useItems } from '../../hooks'
import { MovieDBItem } from '../../types';
import './style.css'

const AdminPage: FC = () => {
    
    const params = new URLSearchParams(window.location.search);
    let query = params.get("query");
    
    const [page, setPage] = useState<number>(Number(params.get("page")) || 1);
    const [movieDBItems,setMovieDBItems] = useState<MovieDBItem[]>();
    const [totalPages, setTotalPages] = useState<number>();

    const { feedMovieDBItems, getMovieDBItemsIds, movieDBItemsIds, removeDBItem } = useDataBase();
    const { getItems } = useItems();
    const { push } = useHistory();

    useEffect(() => {
        push(`/admin?query=${query==null?query="":query}&page=${page}`)
      }, [page]);

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
                  <ItemCard
                      movieDBItem = {movieDBItem}
                      key={movieDBItem.id}
                      feedMovieDBItems={feedMovieDBItems}
                      getMovieDBItemsIds={getMovieDBItemsIds}
                      isIntoDB={
                        movieDBItemsIds.some(e => e.apiID === movieDBItem.id)
                      }
                      removeDBItem={removeDBItem}
                      movieDBItemsIds={movieDBItemsIds}
                  />
              ))}
            </div>
            <Pagination count={totalPages} page={Number(params.get("page"))} onChange={handlePageChange} variant="outlined" defaultPage={1} boundaryCount={0} showFirstButton showLastButton className='pagination' color='primary'/>
        </Layout>
    )
}

export const Admin = WithAuth(AdminPage)