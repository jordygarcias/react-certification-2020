import React, { useEffect, useState, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { YoutubeDataSource } from '../../data/datasources/youtube.datasource';
import { VideoTitle, RelatedGrid } from './styledComponents';

import VideoDescription from './VideoDescription';
import Loader from '../../components/Loader';
import RelatedList from './RelatedList';

const VideoDetailPage = ({ match }) => {
  const videoId = match.params.id;
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoadingState] = useState(true);

  const loadVideoDetails = useCallback(async () => {
    const response = await YoutubeDataSource.getById(videoId);
    setVideo(response.video);
    setRelatedVideos(response.relatedVideos);
    setLoadingState(false);
  }, [videoId]);

  useEffect(() => {
    loadVideoDetails();
    window.scrollTo(0, 0);
  }, [loadVideoDetails]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Grid container>
          <Grid item xs={12} md={9}>
            <VideoDescription video={video} />
          </Grid>
          <RelatedGrid item xs={12} md={3}>
            <VideoTitle>Also try</VideoTitle>
            <RelatedList list={relatedVideos} />
          </RelatedGrid>
        </Grid>
      )}
    </>
  );
};

export default withRouter(VideoDetailPage);
