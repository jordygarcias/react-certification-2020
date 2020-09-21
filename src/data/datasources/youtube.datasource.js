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

  getById: async (id) => {
    const videos = await youtubeApi
      .get('/videos', {
        params: {
          id,
        },
      })
      .then((res) => res.data.items);
    const related = await youtubeApi
      .get('/search', {
        params: {
          relatedToVideoId: id,
          type: 'video',
        },
      })
      .then((res) => res.data.items);

    return {
      video: videos[0],
      relatedVideos: related,
    };
  },
};

export { YoutubeDataSource };
