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
    <Card sx={{ maxWidth: 245 }} >
      <CardMedia
        component="img"
        height="400"
        image={image}
        alt="Poster"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="red">
          {movieDBItem.vote_average}
        </Typography>
        <Rating name="half-rating-read" value={movieDBItem.vote_average/2} precision={0.5} readOnly />
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large" color="secondary" onClick={handlingClick}>{textButton}</Button>
      </CardActions>
    </Card>
  );
}

export { MediaCard }