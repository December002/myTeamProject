import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';

export default function TourCard() {
  const theme = useTheme();

  return (
    <>
      <Card sx={{display:'flex', width: "300px", height: "100px" }}>
        <CardMedia
          component="img"
          sx={{ width: 80, height: 80, marginLeft: "2%", marginTop: "10px" }}
          image="/locimages/daegu.jpg"
          alt="Live from space album cover"
        />
        <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          대구
        </Typography>
        <Typography variant="p" color="" fontSize="0.4rem">
          뭐있지...
        </Typography>
      </CardContent>
        <FavoriteIcon sx={{fontSize: 18}}></FavoriteIcon>
        <Button>추가</Button>
      </Card>
    </>
  );
}  