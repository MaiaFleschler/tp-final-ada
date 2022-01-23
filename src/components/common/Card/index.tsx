import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material';
import Typography from '@mui/material/Typography';

type Props = {
  img: string,
  title: string,
  voteAverage: number
}

const MediaCard: React.FC<Props> = ({ img, title, voteAverage }) => {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        height="400"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="red">
          {voteAverage}
        </Typography>
        <Rating name="half-rating-read" value={voteAverage/2} precision={0.5} readOnly />
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large" startIcon={<AddIcon />}>Add</Button>
      </CardActions>
    </Card>
  );
}

export { MediaCard }