import { FC, useEffect, useState } from 'react'
import { Layout } from '../../components/layout'
import { WithAuth } from '../../hoc';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDataBase, useItems } from '../../hooks';
import { MovieDBItem } from '../../types';
import Rating from '@mui/material/Rating';
import './style.css'
import { Home } from '../Home';



const DetailsPage: FC = () => {
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id");

    const [title, setTitle] = useState<string>();
    const [image, setImage] = useState<string>();
    const [dbItem, setDbItem] = useState<MovieDBItem>();
    const [videos, setVideos] = useState<string[]>();
    const [voteAverage, setVoteAverage] = useState<number>(0);
    const [mediaType, setMediaType] = useState<string | undefined>();
    const { getDBItem } = useDataBase();
    const { getVideosKeys } = useItems();

    useEffect(() => {
        getDBItem(Number(id)).then(async response => {
            await setDbItem(response);
            getVideosKeys(Number(id), response.media_type).then(response => {
                  setVideos(response);
          });
        });
    }, []);

    useEffect(()=>{
        if(dbItem){
            if(dbItem.poster_path==null){
            setImage(require('./noImage.png'))
            } else {
            setImage('https://image.tmdb.org/t/p/w200/'+dbItem.poster_path)
            }
        
            let title;
            if(dbItem.media_type==='movie'){
            title = dbItem.title;
            } else { //tv
            title = dbItem.name;
            }
            if(title){
            if(title.length > 45) title = (title.substring(0, 45))+"...";
            setTitle(title);
            }

            setVoteAverage(dbItem.vote_average);
            setMediaType(dbItem.media_type);
        }
      },[dbItem])

    return(
        <Layout>
            <Card className='detailsCard'>
            <Box className='detailsImg'>
            <CardMedia 
                component="img"
                image={image}
                alt="Poster"
            />
            </Box>
            <Box className='leftContainer'>
            <Box className='detailsCardContent' marginTop={3}>
                <CardContent>
                <Typography component="div" variant="h5" color="primary">
                    {title}
                </Typography>
                <Rating name="half-rating-read" value={voteAverage/2} precision={0.5} readOnly />
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {dbItem?.overview}
                </Typography>
                <Typography variant="subtitle1" marginTop={2}>
                    {(mediaType==='movie')?
                    `Release date: ${dbItem?.release_date}`:
                    `First air date: ${dbItem?.first_air_date}`}
                </Typography>
                </CardContent>
            </Box>
            <Typography component="div" variant="h5" color="secondary" marginLeft={2}>
                Trailers
            </Typography>
            <Box className='detailsVideos'>
                {videos?.map((video) => (
                    <CardMedia className='trailer'
                        key={video}
                        component="iframe"
                        image={`https://www.youtube.com/embed/${video}`}
                    />
                ))}
            </Box>
            </Box>
            </Card>
        </Layout>
    )
}

export const Details = WithAuth(DetailsPage)