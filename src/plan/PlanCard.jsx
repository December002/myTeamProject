import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import StarIcon from '@mui/icons-material/Star';
export default function PlanCard() {

  return (
    <>
      <Card  sx={{display:'flex', width: "auto", height: "100px", flexDirection: 'row', alignItems:"center"}}>
        <CardMedia
          component="img"
          sx={{ width: 70, height: 70, flexGrow: '1', borderRadius: '5px', marginLeft: '10px' }}          
          image="/locimages/daegu.jpg"
          alt="Live from space album cover"
        />
        <CardContent sx={{position:"static", flexGrow:"5"}}>
        <Typography variant="h6" component="div" sx={{fontWeight:"bold"}}>
          대구
        </Typography>
        <Typography variant="div">
          <h7 style={{fontSize:"1px", fontWeight:"bolder", color:"skyblue"}}>도로명</h7>
        </Typography>
        <div>
          <FavoriteIcon sx={{fontSize: 13, color:"#F44336"}}></FavoriteIcon>
          <StarIcon sx={{fontSize: 14, color:"#FBC02D"}}></StarIcon>
        </div>
      </CardContent>
        <div style={{flexGrow:"1", display:"flex", flexDirection:"row-reverse", justifyContent:"center"}}>
          <Button sx={{  height:"30px", width:"30px",padding:"0",minWidth:"0"}}><AddBoxRoundedIcon /></Button>
        </div>
      </Card>
    </>
  );
}  