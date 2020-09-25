/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AuthPage from './Auth.page';
import { ThemeToggleContext } from '../../providers/Theme/Theme.provider';
import { DARK_THEME, LIGHT_THEME } from '../../utils/constants';
import AuthProvider from '../../providers/Auth';
import { AuthContext } from '../../providers/Auth/Auth.provider';

describe('Auth page', () => {
  it('should render full light logo if darkmode is off', () => {
    // arrange
    const { container } = render(
      <ThemeToggleContext.Provider value={{ theme: LIGHT_THEME }}>
        <AuthProvider>
          <AuthPage />
        </AuthProvider>
      </ThemeToggleContext.Provider>
    );
    // assert
    expect(container.querySelector('[src="/full_logo_light.png"]')).toBeTruthy();
  });

  it('should render full dark logo if darkmode is on', () => {
    // arrange
    const { container } = render(
      <ThemeToggleContext.Provider value={{ theme: DARK_THEME }}>
        <AuthProvider>
          <AuthPage />
        </AuthProvider>
      </ThemeToggleContext.Provider>
    );
    // assert
    expect(container.querySelector('[src="/full_logo_dark.png"]')).toBeTruthy();
  });

  it('should call login on form submit', () => {
    // arrange
    const mockLogin = jest.fn();
    const component = render(
      <ThemeToggleContext.Provider value={{ theme: LIGHT_THEME }}>
        <AuthContext.Provider value={{ login: mockLogin }}>
          <AuthPage />
        </AuthContext.Provider>
      </ThemeToggleContext.Provider>
    );
    // act
    fireEvent.submit(component.getByTestId('auth-form'), {
      target: {
        username: { value: 'mock-username' },
        password: { value: 'mock-password' },
      },
    });
    // assert
    expect(mockLogin).toBeCalled();
  });
});
