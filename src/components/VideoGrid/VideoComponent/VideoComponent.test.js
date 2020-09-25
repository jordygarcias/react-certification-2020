/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoComponent from './VideoComponent';
import AuthProvider, { AuthContext } from '../../../providers/Auth/Auth.provider';

describe('Video component', () => {
  const mockVideo = {
    id: { videoId: 'mocked-video-id' },
    snippet: {
      title: 'mocked-video-title',
      thumbnails: { medium: { url: 'mocked-thumbnail-url' } },
    },
  };
  it('should render video info', () => {
    // arrange
    const component = render(
      <BrowserRouter>
        <AuthProvider>
          <VideoComponent video={mockVideo} />
        </AuthProvider>
      </BrowserRouter>
    );
    // assert
    const { container } = component;
    expect(component.getByText('mocked-video-title')).toBeTruthy();
    expect(
      container.querySelector('[style="background-image: url(mocked-thumbnail-url);"]')
    ).toBeTruthy();
    expect(container.querySelector('[href="/play/mocked-video-id"]')).toBeTruthy();
  });

  it('should not render favorite button if unauthenticated', () => {
    // arrange
    const { container } = render(
      <BrowserRouter>
        <AuthProvider>
          <VideoComponent video={mockVideo} />
        </AuthProvider>
      </BrowserRouter>
    );
    // assert
    expect(container.querySelector('[aria-label="Add to favorites"]')).toBeFalsy();
  });

  it('should render favorite button if authenticated', () => {
    // arrange
    const providerValue = {
      authenticated: true,
      authUser: {
        favorites: [],
      },
    };
    const { container } = render(
      <BrowserRouter>
        <AuthContext.Provider value={providerValue}>
          <VideoComponent video={mockVideo} />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    // assert
    expect(container.querySelector('[aria-label="Add to favorites"]')).toBeTruthy();
  });

  it('should render favorite button with red color if video is in favorites list', () => {
    // arrange
    const providerValue = {
      authenticated: true,
      authUser: {
        favorites: [
          {
            id: {
              videoId: 'mocked-video-id',
            },
          },
        ],
      },
    };
    const component = render(
      <BrowserRouter>
        <AuthContext.Provider value={providerValue}>
          <VideoComponent video={mockVideo} />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    // assert
    expect(component.container.querySelector('[style="color: red;"]')).toBeTruthy();
  });

  it('should call toggleFavorite method in handleFavorite and change favorite icon color to red', () => {
    // arrange
    const providerValue = {
      authenticated: true,
      authUser: {
        favorites: [],
      },
      toggleFavorite: jest.fn(),
    };
    const component = render(
      <BrowserRouter>
        <AuthContext.Provider value={providerValue}>
          <VideoComponent video={mockVideo} />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    // act
    fireEvent.click(component.container.querySelector('[aria-label="Add to favorites"]'));
    // assert
    expect(providerValue.toggleFavorite).toBeCalled();
    expect(component.container.querySelector('[style="color: red;"]')).toBeTruthy();
  });
});
