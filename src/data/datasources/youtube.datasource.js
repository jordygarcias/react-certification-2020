import axios from 'axios';

const { REACT_APP_YOUTUBE_API_HOST, REACT_APP_YOUTUBE_API_KEY } = process.env;

export const youtubeApi = axios.create({
  baseURL: REACT_APP_YOUTUBE_API_HOST,
  params: {
    part: 'snippet',
    maxResults: 10,
    key: REACT_APP_YOUTUBE_API_KEY,
  },
});

const YoutubeDataSource = {
  getVideos: (searchText) => {
    return youtubeApi
      .get('/search', {
        params: {
          q: searchText,
          type: 'video',
        },
      })
      .then((res) => res.data.items);
  },

  getById: async (id) => {
    const videos = await youtubeApi
      .get('/videos', {
        params: {
          id,
          type: 'video',
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
