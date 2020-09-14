import React, { useEffect, useState } from 'react';
import SearchBoxLayout from '../../components/SearchBoxLayout';
import VideoGrid from '../../components/VideoGrid';
import { YoutubeDataSource } from '../../data/datasources/youtube.datasource';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    YoutubeDataSource.getVideos().then((list) => {
      setVideos(list);
    });
  }, []);

  const applySearch = (searchText) => {
    console.log(searchText);
  };

  return (
    <SearchBoxLayout onSearch={applySearch}>
      <VideoGrid videos={videos} />
    </SearchBoxLayout>
  );
};

export default Home;
