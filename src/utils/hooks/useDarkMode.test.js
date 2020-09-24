import { renderHook, act } from '@testing-library/react-hooks';
import { DARK_THEME, LIGHT_THEME } from '../constants';
import useDarkMode from './useDarkMode';

describe('useDarkMode hook', () => {
  it('should have an initial state of LIGHT_THEME', () => {
    // arrange
    const { result } = renderHook(() => useDarkMode());
    // assert
    expect(result.current[0]).toBe(LIGHT_THEME);
  });

  it('should handle change state to DARK_MODE', () => {
    // arrange
    const { result } = renderHook(() => useDarkMode());
    // act
    act(() => {
      result.current[1]();
    });
    // assert
    expect(result.current[0]).toBe(DARK_THEME);
  });
});
