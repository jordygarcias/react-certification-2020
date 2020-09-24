/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoComponent from './VideoComponent';
import AuthProvider from '../../../providers/Auth';

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
});
