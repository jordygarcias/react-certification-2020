/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Favorites from './Favorites';
import AuthProvider from '../../providers/Auth';
import { AuthContext } from '../../providers/Auth/Auth.provider';

describe('Favorites page', () => {
  const mockAuthUser = {
    favorites: [
      {
        id: { videoId: 'mocked-video-1' },
        snippet: {
          title: 'mocked-video-title',
          thumbnails: { medium: { url: 'mocked-video-url' } },
        },
      },
      {
        id: { videoId: 'mocked-video-2' },
        snippet: {
          title: 'another-title',
          thumbnails: { medium: { url: 'mocked-video-url' } },
        },
      },
    ],
  };
  it('should render a search input field', () => {
    // arrange
    const component = render(
      <AuthProvider>
        <Favorites />
      </AuthProvider>
    );
    // assert
    expect(component.getByTestId('search-input')).toBeTruthy();
  });

  it('should render a video component for every favorite of authenticated user', () => {
    // arrange
    const component = render(
      <BrowserRouter>
        <AuthContext.Provider value={{ authenticated: true, authUser: mockAuthUser }}>
          <Favorites />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    // assert
    expect(component.getAllByRole('listitem')).toHaveLength(
      mockAuthUser.favorites.length
    );
  });

  it('should filter by title on apply search', () => {
    // arrange
    const component = render(
      <BrowserRouter>
        <AuthContext.Provider value={{ authenticated: true, authUser: mockAuthUser }}>
          <Favorites />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    // act
    fireEvent.change(component.getByPlaceholderText('Filter'), {
      target: { value: 'another-title' },
    });
    // assert
    expect(component.getAllByRole('listitem')).toHaveLength(1);
  });
});
