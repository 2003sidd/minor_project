


import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Card } from '@mui/material';
import './exerciseoption.css';

export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      {itemData.map((item) => (
        <Card key={item.img} className="card">
          <ImageListItem className="ImageListItem-container">
            <img
              srcSet={`${item.img}?w=148&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=148&fit=crop`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
       
              position="below"
            />
          </ImageListItem>
        </Card>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://t4.ftcdn.net/jpg/06/56/62/65/240_F_656626529_dnx86UFoFpLA0y5dSYlXWkKrs4RhZuMH.jpg',
    title: 'Morning Bike Ride',

  },
  {
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV4ZXJjaXNlfGVufDB8fDB8fHww',
    title: 'Evening Workout',
  
  },
  {
    img: 'https://www.shutterstock.com/image-photo/woman-doing-yoga-exercise-on-260nw-653291599.jpg',
    title: 'Night Stretches',
   
  },
];