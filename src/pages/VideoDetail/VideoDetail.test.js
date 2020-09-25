/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import VideoDetail from './VideoDetail';
import { AuthContext } from '../../providers/Auth/Auth.provider';
import { YoutubeDataSource } from '../../data/datasources/youtube.datasource';

describe('VideoDetail component', () => {
  const authProviderValue = {
    authenticated: true,
    authUser: {
      favorites: [],
    },
  };
  const mockMatch = { params: { id: '123' } };
  beforeEach(() => {
    YoutubeDataSource.getById = jest.fn(() => ({
      video: {
        id: '123',
        snippet: {
          title: 'mocked-title',
          thumbnails: {
            medium: {
              url: 'mocked-medium-url',
            },
          },
        },
      },
      relatedVideos: [],
    }));
  });
  it('should render the Loader if is loading', () => {
    // arrange
    const component = render(
      <BrowserRouter>
        <AuthContext.Provider value={authProviderValue}>
          <VideoDetail match={mockMatch} />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    // assert
    expect(component.getByTestId('loader')).toBeTruthy();
  });

  it('should render video details if not loading', async () => {
    // arrange
    const component = render(
      <BrowserRouter>
        <AuthContext.Provider value={authProviderValue}>
          <VideoDetail math={mockMatch} />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    // act
    await new Promise((resolve) => setTimeout(resolve, 500));
    // assert
    expect(component.queryByTestId('loader')).toBeFalsy();
    expect(component.getByText('Also try')).toBeTruthy();
  });
});
