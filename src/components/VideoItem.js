import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
      <Card
    		onClick={() => onVideoSelect(video)}
        className='recipe-card'
        sx={{
          width: 400,
          height: 310,
          boxShadow: 'none',
          borderRadius: 0,
        }}
      >
        <CardMedia
          component='img'
          height='250'
          image={
            video?.snippet?.thumbnails?.high.url ||
            'https://i.pinimg.com/474x/30/88/a3/3088a3ebaf713600adacd00397ee410d.jpg'
          }
          alt='green iguana'
          sx={{ borderRadius: 2 }}
        />
        <CardContent>
          <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
            {video?.snippet?.title}
          </Typography>
        </CardContent>
      </Card>
)
}

export default VideoItem;
