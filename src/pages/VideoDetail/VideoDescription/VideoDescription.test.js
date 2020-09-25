/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import VideoDescription from './VideoDescription';
import { AuthContext } from '../../../providers/Auth/Auth.provider';

describe('VideoDescription component', () => {
  const authProvider = {
    authenticated: true,
    authUser: {
      favorites: [{ id: { videoId: '123' } }],
    },
    toggleFavorite: jest.fn(),
  };
  const unathenticatedProvider = {
    authenticated: false,
  };
  const mockVideo = {
    id: '123',
    snippet: {
      title: 'Mock title',
      channelTitle: 'Mock Channel Title',
      description: 'Mock description',
      thumbnails: {
        medium: { url: 'mock-thumbnail-url' },
      },
    },
  };
  it('should not render favorite button if unathenticated', () => {
    // arrange
    const component = render(
      <AuthContext.Provider value={unathenticatedProvider}>
        <VideoDescription video={mockVideo} />
      </AuthContext.Provider>
    );
    // assert
    expect(component.queryByTestId('toggle-favorite-btn')).toBeFalsy();
  });

  it('should render favorite button if authenticated', () => {
    // arrange
    const component = render(
      <AuthContext.Provider value={authProvider}>
        <VideoDescription video={mockVideo} />
      </AuthContext.Provider>
    );
    // assert
    expect(component.getByTestId('toggle-favorite-btn')).toBeTruthy();
  });

  it("should render favorite button color grey if video is not in user's favorite list", () => {
    // arrange
    const { container } = render(
      <AuthContext.Provider value={authProvider}>
        <VideoDescription video={{ ...mockVideo, id: '456' }} />
      </AuthContext.Provider>
    );
    // assert
    expect(container.querySelector('[style="color: grey;"]')).toBeTruthy();
  });

  it("should render favorite button color red if video is in user's favorite list", () => {
    // arrange
    const { container } = render(
      <AuthContext.Provider value={authProvider}>
        <VideoDescription video={mockVideo} />
      </AuthContext.Provider>
    );
    // assert
    expect(container.querySelector('[style="color: red;"]')).toBeTruthy();
  });

  it('should call toogleFavorite when favorite button is pressed', () => {
    // arrange
    const component = render(
      <AuthContext.Provider value={authProvider}>
        <VideoDescription video={mockVideo} />
      </AuthContext.Provider>
    );
    // act
    fireEvent.click(component.getByTestId('toggle-favorite-btn'));
    // assert
    expect(authProvider.toggleFavorite).toBeCalled();
  });
});
