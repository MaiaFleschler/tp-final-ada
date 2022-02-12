import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDataBase } from '../../../hooks';
import { MovieDBItem } from '../../../types';
import { FC, useState } from 'react';
import './style.css'

type Props = {
  movieDBItem: MovieDBItem,
}

const MediaCard : FC<Props> = ({ movieDBItem }) => {
  
  const { feedMovieDBItems } = useDataBase();

  const [textButton, setTextButton] = useState("Add")

  const handlingClick = () => {
    feedMovieDBItems(movieDBItem);
    setTextButton('Delete');
  }

  let image;
  if(movieDBItem.poster_path==null){
    image= require('./noImage.png')
  } else {
    image='https://image.tmdb.org/t/p/w200/'+movieDBItem.poster_path
  }

  let title;
  if(movieDBItem.media_type===undefined || movieDBItem.media_type==='movie'){
    title=movieDBItem.title
  } else {
    title=movieDBItem.name
  }

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
        <Typography variant="h6" color="#e6ab07">
          {movieDBItem.vote_average}
        </Typography>
        <Rating name="half-rating-read" value={movieDBItem.vote_average/2} precision={0.5} readOnly />
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="large" color="primary" onClick={handlingClick}>{textButton}</Button>
      </CardActions>
    </Card>
  );
}

export { MediaCard }