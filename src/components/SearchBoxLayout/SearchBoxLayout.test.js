/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SearchBoxLayout from './SearchBoxLayout';

describe('SearchBoxLayout component', () => {
  it('should render the children passed', () => {
    // arrange
    const component = render(
      <SearchBoxLayout>
        <p>Mocked Children</p>
      </SearchBoxLayout>
    );
    // assert
    expect(component.getByText('Mocked Children')).toBeTruthy();
  });

  it('should have a button and placeholder "Search" by default', () => {
    // arrange
    const component = render(
      <SearchBoxLayout>
        <p>Mocked Children</p>
      </SearchBoxLayout>
    );
    // assert
    expect(component.getByPlaceholderText('Search')).toBeTruthy();
    expect(component.queryAllByTestId('search-btn')).toHaveLength(1);
  });

  it('should call onSearch method when button clicked', async () => {
    // arrange
    const mockOnSearch = jest.fn(() => {});
    const component = render(
      <SearchBoxLayout onSearch={mockOnSearch}>
        <p>Mocked Children</p>
      </SearchBoxLayout>
    );
    // act
    fireEvent.click(component.getByTestId('search-btn'));
    // assert
    expect(mockOnSearch).toHaveBeenCalled();
  });

  it('should handle searchOnType in placeholder and no buttons', async () => {
    // arrange
    const component = render(
      <SearchBoxLayout searchOnType>
        <p>Mocked Children</p>
      </SearchBoxLayout>
    );
    // assert
    expect(component.getByPlaceholderText('Filter')).toBeTruthy();
    expect(component.queryAllByTestId('search-btn')).toHaveLength(0);
  });

  it('should call onSearch when input is typed if searchOnType is in props', () => {
    // arrange
    const mockOnSearch = jest.fn(() => {});
    const component = render(
      <SearchBoxLayout onSearch={mockOnSearch} searchOnType>
        <p>Mocked Children</p>
      </SearchBoxLayout>
    );
    fireEvent.change(component.getByPlaceholderText('Filter'), {
      target: { value: 'Search' },
    });
    // assert
    expect(mockOnSearch).toHaveBeenCalled();
  });
});
