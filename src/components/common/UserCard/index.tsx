import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { MovieDBItem } from '../../../types';
import { FC } from 'react';
import './style.css'

type Props = {
    dbItem: MovieDBItem,
  }

const UserCard : FC<Props> = ({ dbItem }) => {

    let image;
    if(dbItem.poster_path==null){
      image= require('./noImage.png')
    } else {
      image='https://image.tmdb.org/t/p/w200/'+dbItem.poster_path
    }
  
    let title;
    if(dbItem.media_type===undefined || dbItem.media_type==='movie'){
      title=dbItem.title
    } else {
      title=dbItem.name
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
        <Typography variant="h6" color="#B39BC8">
          {dbItem.vote_average}
        </Typography>
        <Rating name="half-rating-read" value={dbItem.vote_average/2} precision={0.5} readOnly />
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="large" color="primary">Details</Button>
      </CardActions>
    </Card>
  );
}

export { UserCard }
