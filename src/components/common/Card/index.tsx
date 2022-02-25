import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { MovieDBItem } from '../../../types';
import { FC, useEffect, useState } from 'react';
import './style.css'

type Props = {
  movieDBItem: MovieDBItem,
  feedMovieDBItems: (movie:MovieDBItem)=>void,
  getMovieDBItemsIds: ()=>void,
  isIntoDB: boolean,
  removeDBItem: (id:string)=>void,
  movieDBItemsIds: { apiID: number; dbId: string; }[]
}

const ItemCard : FC<Props> = ({ movieDBItem, feedMovieDBItems, getMovieDBItemsIds, isIntoDB, removeDBItem, movieDBItemsIds }) => {

  const [buttonText, setButtonText] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [image, setImage] = useState<string>();

  const handlingClick = async () => {
      if(!isIntoDB){
        await feedMovieDBItems(movieDBItem);
        getMovieDBItemsIds();
      } else {
        let item = movieDBItemsIds.filter(e => e.apiID === movieDBItem.id)
        removeDBItem(item[0].dbId)
        getMovieDBItemsIds();
        setButtonText('Add');
      }
    }
    
  useEffect(()=>{
    isIntoDB?setButtonText('Remove'):setButtonText('Add');
  },[isIntoDB])


  useEffect(()=>{

    if(movieDBItem.media_type===undefined){
      movieDBItem.media_type = "movie";
    }
    
    if(movieDBItem.poster_path==null){
      setImage(require('./noImage.png'))
    } else {
      setImage('https://image.tmdb.org/t/p/w200/'+movieDBItem.poster_path)
    }

    let title;
    if(movieDBItem.media_type==='movie'){
      title = movieDBItem.title;
    } else { //tv
      title = movieDBItem.name;
    }
    if(typeof(title)=='string' && title){
      if(title.length > 45) title = (title.substring(0, 45))+"...";
      setTitle(title);
    }
  },[])


  return (
    <Card className='card' >
      <CardMedia
        component="img"
        image={image}
        alt="Poster"
        className='cardImg'
      />
      <CardContent className='cardContent'>
        <Typography gutterBottom variant="h6" component="div" className='title'>
          {title}
        </Typography>
        <Typography variant="h6" color="#B39BC8">
          {movieDBItem.vote_average}
        </Typography>
        <Rating name="half-rating-read" value={movieDBItem.vote_average/2} precision={0.5} readOnly />
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="large" color="primary" onClick={handlingClick}>{buttonText}</Button>
      </CardActions>
    </Card>
  );
}

export { ItemCard }
