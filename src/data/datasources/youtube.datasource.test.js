import { YoutubeDataSource, youtubeApi } from './youtube.datasource';

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn().mockImplementation(() => Promise.resolve({ data: { items: [] } })),
  })),
}));

describe('Youtube DataSource', () => {
  describe('getVideos', () => {
    it('should call an axios request', async () => {
      // arrange
      const axiosSpy = jest.spyOn(youtubeApi, 'get');
      // act
      await YoutubeDataSource.getVideos();
      // assert
      expect(axiosSpy).toBeCalled();
    });
  });

  describe('getById', () => {
    const mockId = '123abc';
    beforeEach(() => {
      youtubeApi.get = jest
        .fn()
        .mockImplementation(() => Promise.resolve({ data: { items: [] } }));
    });
    afterEach(() => {
      youtubeApi.get.mockRestore();
    });
    it('should call two axios requests', async () => {
      // arrange
      const axiosSpy = jest.spyOn(youtubeApi, 'get');
      // act
      await YoutubeDataSource.getById(mockId);
      // assert
      expect(axiosSpy).toBeCalledTimes(2);
    });

    it('should return an object with video details and related videos list', async () => {
      // act
      const response = await YoutubeDataSource.getById(mockId);
      // assert
      expect(response).toHaveProperty('video');
      expect(response).toHaveProperty('relatedVideos');
    });
  });
});
