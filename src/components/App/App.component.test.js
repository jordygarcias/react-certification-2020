/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App.component';

describe('App component', () => {
  it('should render the app', () => {
    // arrange
    const component = render(<App />);
    // assert
    expect(component).toBeTruthy();
  });
});
