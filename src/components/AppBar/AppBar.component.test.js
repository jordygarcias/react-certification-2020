/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import AppBar from './AppBar.component';
import AuthProvider from '../../providers/Auth/Auth.provider';
import MyThemeProvider, {
  ThemeToggleContext,
} from '../../providers/Theme/Theme.provider';
import { DARK_THEME } from '../../utils/constants';

describe('AppBar component', () => {
  it('should render auth & dark mode buttons', () => {
    // arrange
    const component = render(
      <AuthProvider>
        <MyThemeProvider>
          <AppBar />
        </MyThemeProvider>
      </AuthProvider>
    );
    // assert
    expect(component.getByText('Sign in')).toBeTruthy();
    expect(component.getByTestId('darkmode-btn')).toBeTruthy();
  });

  it('should render light icon if darkmode is off', () => {
    // arrange
    const { container } = render(
      <AuthProvider>
        <MyThemeProvider>
          <AppBar />
        </MyThemeProvider>
      </AuthProvider>
    );
    // assert
    expect(container.querySelector('[src="/Light_logo.png"]')).toBeTruthy();
  });

  it('should render dark icon if darkmode is on', () => {
    // arrange
    const themeProviderValue = {
      theme: DARK_THEME,
    };
    const { container } = render(
      <AuthProvider>
        <ThemeToggleContext.Provider value={themeProviderValue}>
          <AppBar />
        </ThemeToggleContext.Provider>
      </AuthProvider>
    );
    // assert
    expect(container.querySelector('[src="/Dark_logo.png"]')).toBeTruthy();
  });
});
