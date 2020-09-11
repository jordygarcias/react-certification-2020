import { storage } from './storage';

const mockLocalStorage = (function localStorage() {
  return {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

describe('Storage util', () => {
  describe('set method', () => {
    it('should call setItem from localStorage', () => {
      // arrange
      const setItemSpy = jest.spyOn(window.localStorage, 'setItem');
      // act
      storage.set('mock-key', 'mock-value');
      // assert
      expect(setItemSpy).toBeCalled();
    });
  });

  describe('get method', () => {
    it('should call getItem from localStorage', () => {
      // arrange
      const getItemSpy = jest.spyOn(window.localStorage, 'getItem');
      // act
      storage.get('mock-key');
      // assert
      expect(getItemSpy).toBeCalled();
    });

    it('should return null if key is not found in localStorage', () => {
      // act
      const value = storage.get('mock-key');
      // assert
      expect(value).toBe(null);
    });
  });

  describe('remove method', () => {
    it('should call removeItem from localStorage', () => {
      // arrange
      const removeItemSpy = jest.spyOn(window.localStorage, 'removeItem');
      // act
      storage.remove('mock-key');
      // assert
      expect(removeItemSpy).toBeCalled();
    });
  });
});
