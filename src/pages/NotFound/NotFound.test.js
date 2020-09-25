/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './NotFound.page';

describe('NotFound page', () => {
  it('should render a placeholder message', () => {
    // arrange
    const component = render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    // assert
    expect(component.container.querySelector('[src="not_found.svg"]')).toBeTruthy();
    expect(component.getByText('Could not found what you were looking for').tagName).toBe(
      'H1'
    );
    expect(component.container.querySelector('[href="/"]')).toBeTruthy();
  });
});
