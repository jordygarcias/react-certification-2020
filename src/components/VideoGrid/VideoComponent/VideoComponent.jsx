import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  makeStyles,
  IconButton,
  CardContent,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useAuth } from '../../../providers/Auth';

const useTyles = makeStyles((theme) => ({
  header: {
    fontSize: 14,
    paddingBottom: 0,
  },
  media: {
    width: '100%',
    height: 250,
    [theme.breakpoints.up('sm')]: {
      height: 120,
    },
  },
  cardContent: {
    fontSize: 16,
  },
}));

const VideoCard = styled(Card)`
  && {
    background: ${({ theme }) => theme.videoCardBackground};
    color: ${({ theme }) => theme.videoCardTextColor};
  }
`;

const ChannelTitleSection = styled(CardContent)`
  && {
    color: ${({ theme }) => theme.videoCardChannelTextColor};
    font-size: 14px;
    padding-top: 0px;
  }
`;

const Video = ({ video }) => {
  const classes = useTyles();
  const data = video.snippet;

  const { authenticated } = useAuth();

  return (
    <Link to={`play/${video.id.videoId}`}>
      <VideoCard>
        <CardHeader
          className={classes.header}
          title={data.title}
          titleTypographyProps={{ variant: 'body1' }}
          action={
            authenticated ? (
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
            ) : null
          }
        />
        <ChannelTitleSection>{data.channelTitle}</ChannelTitleSection>
        <CardMedia
          className={classes.media}
          image={data.thumbnails.medium.url}
          title={data.title}
        />
        <CardContent className={classes.cardContent}>{data.description}</CardContent>
      </VideoCard>
    </Link>
  );
};

export default Video;
