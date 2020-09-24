/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import AuthProvider from './Auth.provider';

describe('Auth Provider component', () => {
  it('should render children content', () => {
    // arrange
    const component = render(
      <AuthProvider>
        <p>Mock children</p>
      </AuthProvider>
    );
    // assert
    expect(component.getByText('Mock children')).toBeTruthy();
  });

  it('should render a toast container', () => {
    // arrange
    const { container } = render(
      <AuthProvider>
        <p>Mock children</p>
      </AuthProvider>
    );
    // assert
    expect(container.querySelector("[class='Toastify']")).toBeTruthy();
  });
});
