import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { HelpCenter } from '@mui/icons-material';
import axios from 'axios';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Burger of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  const [burger, setBurger] = useState([]);   // 배열 기본값 (변수)초기화  String uid = ""; 이런 느낌
useEffect(() => {
  axios.get('/burger/burger/Hamburger')
    .then(burger => setBurger(burger.data))
    .catch(err => console.log(err));
}, [])
  return (
    <>
      <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {burger.map((burgerData, index) => (
          <Box key={index} sx={{ minWidth: 275, maxWidth: 275, m: 1 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Burger of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  {burgerData.bname}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {burgerData.btext}
                </Typography>
                <Typography variant="body2">
                  Price: {burgerData.bprice}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Order Now</Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
      </div>
        </>
  );
}
