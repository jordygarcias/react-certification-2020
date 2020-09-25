import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Divider, Grid, IconButton } from '@material-ui/core';
import { Player, VideoTitle, VideoDescriptionParagraph } from '../styledComponents';
import { useAuth } from '../../../providers/Auth';

const VideoDescription = ({ video }) => {
  const { authenticated, toggleFavorite, authUser } = useAuth();
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    if (authenticated) {
      setIsInFavorites(authUser.favorites.find((v) => v.id.videoId === video.id));
    }
  }, []);

  const handleFavorite = () => {
    toggleFavorite({
      ...video,
      id: {
        videoId: video.id,
      },
    });
    setIsInFavorites(!isInFavorites);
  };

  return (
    <>
      <Player controls url={`https://www.youtube.com/watch?v=${video.id}`} />
      <Grid container spacing={3}>
        <Grid item xs={10} md={11}>
          <VideoTitle>{video.snippet.title}</VideoTitle>
        </Grid>
        <Grid item xs={2} md={1}>
          {authenticated && (
            <IconButton
              data-testid="toggle-favorite-btn"
              onClick={handleFavorite}
              aria-label="Add to favorites"
              style={{ color: isInFavorites ? 'red' : 'grey' }}
            >
              <FavoriteIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
      <VideoDescriptionParagraph>{video.snippet.channelTitle}</VideoDescriptionParagraph>
      <Divider />
    </>
  );
};

export default VideoDescription;
