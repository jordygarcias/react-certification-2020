/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Private from './Private.component';
import { AuthContext } from '../../providers/Auth/Auth.provider';

describe('Private component', () => {
  it('should redirect if unauthenticated', () => {
    // arrange
    const component = render(
      <BrowserRouter>
        <AuthContext.Provider value={{ authenticated: false }}>
          <Private>Private component</Private>
        </AuthContext.Provider>
      </BrowserRouter>
    );
    // assert
    expect(component.queryByText('Private component')).toBeFalsy();
  });

  it('should render private content if authenticated', () => {
    // arrange
    const component = render(
      <BrowserRouter>
        <AuthContext.Provider value={{ authenticated: true }}>
          <Private>Private component</Private>
        </AuthContext.Provider>
      </BrowserRouter>
    );
    // assert
    expect(component.getByText('Private component')).toBeTruthy();
  });
});
