/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RelatedList from './RelatedList';

describe('RelatedList component', () => {
  const mockList = [
    {
      id: { videoId: '123' },
      snippet: {
        title: 'mocked-video',
        channelTitle: 'mocked-channel-title',
        thumbnails: {
          medium: {
            url: 'mocked-thumbnail-url',
          },
        },
      },
    },
    {
      id: { videoId: '456' },
      snippet: {
        title: 'mocked-video',
        channelTitle: 'mocked-channel-title',
        thumbnails: {
          medium: {
            url: 'mocked-thumbnail-url',
          },
        },
      },
    },
  ];
  it('should render a list of videos passed in props', () => {
    // arrange
    const component = render(
      <BrowserRouter>
        <RelatedList list={mockList} />
      </BrowserRouter>
    );
    // assert
    expect(component.getAllByRole('listitem')).toHaveLength(mockList.length);
  });
});
