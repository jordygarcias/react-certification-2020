import { YoutubeDataSource, youtubeApi } from './youtube.datasource';

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
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
});
