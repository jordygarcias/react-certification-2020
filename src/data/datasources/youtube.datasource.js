import axios from 'axios';

const YOUTUBE_API_HOST = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_API_KEY = 'AIzaSyDE3JntBY25ZGZI4627iz3U_DuC2QsqhF0';

export const youtubeApi = axios.create({
  baseURL: YOUTUBE_API_HOST,
  params: {
    part: 'snippet',
    maxResults: 10,
    key: YOUTUBE_API_KEY,
  },
});

const YoutubeDataSource = {
  getVideos: (searchText) => {
    return youtubeApi
      .get('/search', {
        params: {
          q: searchText,
        },
      })
      .then((res) => res.data.items);
  },
};

export { YoutubeDataSource };
