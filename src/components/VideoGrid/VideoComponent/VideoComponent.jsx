import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  makeStyles,
  IconButton,
  CardContent,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useTyles = makeStyles((theme) => ({
  header: {
    fontSize: 14,
  },
  media: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 250,
    },
  },
}));

const Video = ({ video }) => {
  console.log(video);
  const classes = useTyles();
  const data = video.snippet;

  return (
    <Card>
      <CardHeader
        className={classes.header}
        title={data.title}
        titleTypographyProps={{ variant: 'p' }}
        subheader={data.channelTitle}
        subheaderTypographyProps={{ variant: 'p' }}
        action={
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
      />
      <CardMedia
        className={classes.media}
        image={data.thumbnails.medium.url}
        title={data.title}
      />
      <CardContent>{data.description}</CardContent>
    </Card>
  );
};

export default Video;
