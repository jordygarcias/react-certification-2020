import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import VideoComponent from './VideoComponent';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 0,
  },
}));

const VideoGrid = ({ videos }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={5}>
      {videos.map((video) => (
        <Grid key={`${video.id.videoId}-${video.etag}`} item xs={12} sm={6} md={4} lg={3}>
          <VideoComponent video={video} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoGrid;
