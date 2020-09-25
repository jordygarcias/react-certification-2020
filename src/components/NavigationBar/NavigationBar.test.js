/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import mediaQuery from 'css-mediaquery';
import { render } from '@testing-library/react';
import NavigationBar from './NavigationBar';
import AuthProvider from '../../providers/Auth';
import { AuthContext } from '../../providers/Auth/Auth.provider';

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

describe('Navigation Bar component', () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth);
  });
  it('should not render favorite link if unauthenticated', () => {
    // arrange
    const component = render(
      <BrowserRouter>
        <AuthProvider>
          <NavigationBar />
        </AuthProvider>
      </BrowserRouter>
    );
    // assert
    expect(component.queryByTestId('favorites-link')).toBeFalsy();
  });

  it('should render favorite link if authenticated', () => {
    // arrange
    const component = render(
      <BrowserRouter>
        <AuthContext.Provider value={{ authenticated: true }}>
          <NavigationBar />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    // assert
    expect(component.getByTestId('favorites-link')).toBeTruthy();
  });
});
