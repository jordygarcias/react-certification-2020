/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AuthIconButton from './AuthIconButton.component';
import MyThemeProvider from '../../providers/Theme';
import { AuthContext } from '../../providers/Auth/Auth.provider';

describe('AuthIconButton component', () => {
  const mockProviderValue = {
    authenticated: false,
  };
  it('should render "Sign in" button if is unauthenticated', () => {
    // arrange
    const component = render(
      <AuthContext.Provider value={mockProviderValue}>
        <MyThemeProvider>
          <AuthIconButton />
        </MyThemeProvider>
      </AuthContext.Provider>
    );
    // assert
    expect(component.getByText('Sign in')).toBeTruthy();
  });
  it('should render "Sign out" button if is authenticated', () => {
    // arrange
    const providerValue = {
      authenticated: true,
    };
    const component = render(
      <AuthContext.Provider value={providerValue}>
        <MyThemeProvider>
          <AuthIconButton />
        </MyThemeProvider>
      </AuthContext.Provider>
    );
    // assert
    expect(component.getByText('Sign out')).toBeTruthy();
  });

  it('should not display popup menu as default', () => {
    // arrange
    const component = render(
      <AuthContext.Provider value={mockProviderValue}>
        <MyThemeProvider>
          <AuthIconButton />
        </MyThemeProvider>
      </AuthContext.Provider>
    );
    // assert
    expect(component.queryByRole('presentation')).toBeFalsy();
  });

  it('should display popup menu when auth icon button is pressed', () => {
    // arrange
    const component = render(
      <AuthContext.Provider value={mockProviderValue}>
        <MyThemeProvider>
          <AuthIconButton />
        </MyThemeProvider>
      </AuthContext.Provider>
    );
    // act
    fireEvent.click(component.getByTestId('authicon-btn'));
    // assert
    expect(component.getByRole('presentation')).toBeTruthy();
  });
});
