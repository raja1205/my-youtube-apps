import React from 'react';
import { Typography, Box } from '@mui/material';
import ReactPlayer from 'react-player';
import VideoItem from './VideoItem';
import Loader from "./Loader";

const VideoDetail = ({ selectedVideo, videos, onVideoSelect }) => {
	if (!selectedVideo) return <Loader />

	const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <>
      {selectedVideo && (
        <Box
          className='video-detail-container'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 1,
              pb: 1,
              position: 'relative',
              width: '100%',
            }}
          >
            <Box
              className='video-detail'
              sx={{ position: 'fixed', top: '100px', left: '10px' }}
            >
              <ReactPlayer
                className='video-card'
                controls
                url={videoSrc}
              />
              <Typography sx={{ fontSize: 18, fontWeight: 600, p: 1.5 }}>
                {selectedVideo?.snippet?.title}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 10,
            }}
            className='related-videos'
          >
            <Typography
              sx={{ fontSize: 25, fontWeight: 800, m: 2, textAlign: 'center' }}
            >
              Similar Videos
            </Typography>
            <Box className='related-videos-container'>
              {videos?.map((video) => (
                <VideoItem
                  video={video}
                  id={(video.id.videoId && video.id.videoId) || video.id}
                  key={(video.id.videoId && video.id.videoId) || video.id}
                  onVideoSelect={onVideoSelect}
                />
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default VideoDetail;
