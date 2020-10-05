import React, { useEffect, useState } from 'react';
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
      height: 200,
    },
  },
  cardContent: {
    fontSize: 16,
    maxHeight: 100,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
  },
}));

const VideoCard = styled(Card)`
  && {
    background: ${({ theme }) => theme.videoCardBackground};
    color: ${({ theme }) => theme.videoCardTextColor};
    padding-bottom: 20px;
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
  const { authenticated, toggleFavorite, authUser } = useAuth();
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    if (authenticated) {
      setIsInFavorites(authUser.favorites.find((v) => v.id.videoId === video.id.videoId));
    }
  }, []);

  const handleFavorite = () => {
    toggleFavorite(video);
    setIsInFavorites(!isInFavorites);
  };

  const HeaderAction = () => {
    if (authenticated) {
      return (
        <IconButton
          onClick={handleFavorite}
          aria-label="Add to favorites"
          style={{ color: isInFavorites ? 'red' : 'grey' }}
        >
          <FavoriteIcon />
        </IconButton>
      );
    }
    return null;
  };

  return (
    <VideoCard>
      <CardHeader
        className={classes.header}
        title={data.title}
        titleTypographyProps={{ variant: 'body1' }}
        action={<HeaderAction />}
      />
      <ChannelTitleSection>{data.channelTitle}</ChannelTitleSection>
      <Link to={`play/${video.id.videoId}`}>
        <CardMedia
          className={classes.media}
          image={data.thumbnails.medium.url}
          title={data.title}
        />
      </Link>
      <CardContent className={classes.cardContent}>{data.description}</CardContent>
    </VideoCard>
  );
};

export default Video;
