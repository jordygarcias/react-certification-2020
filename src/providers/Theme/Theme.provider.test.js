/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import MyThemeProvider from './Theme.provider';

describe('MyThemeProvider component', () => {
  it('should render children content', () => {
    // arrange
    const component = render(
      <MyThemeProvider>
        <p>Mocked Children</p>
      </MyThemeProvider>
    );
    // assert
    expect(component.getByText('Mocked Children')).toBeTruthy();
  });
});
