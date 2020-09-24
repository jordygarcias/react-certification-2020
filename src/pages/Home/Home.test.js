/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Home from './Home.page';
import { YoutubeDataSource } from '../../data/datasources/youtube.datasource';

describe('Home component', () => {
  it('should render a Loader if it is loading', async () => {
    // arrange
    const component = render(<Home />);
    // assert
    expect(component.getByTestId('loader')).toBeTruthy();
  });

  it('should call getVideos when it renders', async () => {
    // arrange
    YoutubeDataSource.getVideos = jest.fn(() => Promise.resolve([]));
    const component = render(<Home />);
    await new Promise((resolve) => setTimeout(resolve, 500));
    // assert
    expect(YoutubeDataSource.getVideos).toBeCalled();
    expect(component.queryAllByTestId('loader')).toHaveLength(0);
  });

  it('should call getVideos on search event', async () => {
    // arrange
    YoutubeDataSource.getVideos = jest.fn(() => Promise.resolve([]));
    const component = render(<Home />);
    // act
    fireEvent(component.getByTestId('search-btn'), new MouseEvent('click'));
    // assert
    expect(YoutubeDataSource.getVideos).toHaveBeenCalled();
  });
});
