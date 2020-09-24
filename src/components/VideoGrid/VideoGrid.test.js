/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import VideoGrid from './VideoGrid';
import AuthProvider from '../../providers/Auth';

describe('VideoGrid component', () => {
  const mockVideos = [
    {
      id: { videoId: 'mocked-video-id' },
      snippet: {
        title: 'mocked-video-title',
        thumbnails: { medium: { url: 'mocked-thumbnail-url' } },
      },
    },
    {
      id: { videoId: 'mocked-video-2-id' },
      snippet: {
        title: 'mocked-video-2-title',
        thumbnails: { medium: { url: 'mocked-thumbnail-url-2' } },
      },
    },
  ];
  it('should render a grid item for every video passed in props', () => {
    // arrange
    const component = render(
      <BrowserRouter>
        <AuthProvider>
          <VideoGrid videos={mockVideos} />
        </AuthProvider>
      </BrowserRouter>
    );
    // assert
    expect(component.getAllByRole('listitem')).toHaveLength(2);
  });
});
