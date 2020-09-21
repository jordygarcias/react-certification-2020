import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import SearchBoxLayout from '../../components/SearchBoxLayout';
import VideoGrid from '../../components/VideoGrid';
import { YoutubeDataSource } from '../../data/datasources/youtube.datasource';

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setLoadingStatus] = useState(true);

  const loadVideos = (searchText) => {
    setLoadingStatus(true);
    YoutubeDataSource.getVideos(searchText).then((list) => {
      setVideos(list);
      setLoadingStatus(false);
    });
  };

  useEffect(() => {
    loadVideos();
  }, []);

  const applySearch = (searchText) => loadVideos(searchText);

  return (
    <SearchBoxLayout onSearch={applySearch}>
      {isLoading ? <Loader /> : <VideoGrid videos={videos} />}
    </SearchBoxLayout>
  );
};

export default HomePage;
