import { USERS_STORAGE_KEY, AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { AuthLocalDataSource } from './auth_local.datasource';
import { InvalidCredentialsError } from '../../errors/AuthErrors';

describe('Auth Datasource', () => {
  const mockUsername = 'test-username';
  const mockPassword = 'test-password';
  const usersList = [
    { username: mockUsername, password: mockPassword },
    { username: 'another-user', password: '123' },
  ];

  beforeEach(() => {
    storage.get = jest.fn().mockImplementation(() => usersList);
    storage.set = jest.fn();
  });

  afterEach(() => {
    storage.get.mockRestore();
    storage.set.mockRestore();
  });

  describe('authenticate method', () => {
    it('should call get from storage util', () => {
      // arrange
      const getSpy = jest.spyOn(storage, 'get');
      // act
      AuthLocalDataSource.authenticate(mockUsername, mockPassword);
      // assert
      expect(getSpy).toBeCalled();
    });

    it('should get users list from storage', () => {
      // arrange
      const getSpy = jest.spyOn(storage, 'get');
      // act
      AuthLocalDataSource.authenticate(mockUsername, mockPassword);
      // assert
      expect(getSpy).toBeCalledWith(USERS_STORAGE_KEY);
    });

    it('should set AUTH_STORAGE_KEY if username exists with the provided password', () => {
      // arrange
      const setSpy = jest.spyOn(storage, 'set');
      // act
      AuthLocalDataSource.authenticate(mockUsername, mockPassword);
      // assert
      expect(setSpy).toBeCalledWith(AUTH_STORAGE_KEY, {
        username: mockUsername,
        password: mockPassword,
      });
    });

    it('should throw an InvalidCredentials error if credentials does not match', () => {
      try {
        // act
        AuthLocalDataSource.authenticate(mockUsername, 'not-valid-password');
      } catch (error) {
        // assert
        expect(error).toEqual(new InvalidCredentialsError());
      }
    });

    it('should return user as authUser if not found and save it in users storage list', () => {
      // arrange
      const setSpy = jest.spyOn(storage, 'set');
      // act
      const authUser = AuthLocalDataSource.authenticate('other-user', '123456');
      // assert
      const expectedNewUser = {
        username: 'other-user',
        password: '123456',
        favorites: [],
      };
      expect(setSpy.mock.calls[0]).toEqual([USERS_STORAGE_KEY, usersList]);
      expect(authUser).toEqual(expectedNewUser);
    });
  });

  describe('getActiveSession', () => {
    it('should call get method from storage with AUTH_STORAGE_KEY', () => {
      // arrange
      const getSpy = jest.spyOn(storage, 'get');
      // act
      AuthLocalDataSource.getActiveSession();
      // assert
      expect(getSpy).toBeCalledWith(AUTH_STORAGE_KEY);
    });
  });

  describe('deAuthenticate', () => {
    it('should call remove method from storage with AUTH_STORAGE_KEY', () => {
      // arrange
      storage.remove = jest.fn();
      const removeSpy = jest.spyOn(storage, 'remove');
      // act
      AuthLocalDataSource.deAuthenticate();
      // assert
      expect(removeSpy).toBeCalledWith(AUTH_STORAGE_KEY);
    });
  });

  describe('updateFavorites', () => {
    const mockUser = {
      username: 'test-user',
      password: 'test-password',
    };
    it('should call storage get & set methods', () => {
      // arrange
      storage.get = jest.fn(() => [mockUser]);
      storage.set = jest.fn();
      // act
      AuthLocalDataSource.updateFavorites(mockUser);
      // assert
      expect(storage.get).toBeCalled();
      expect(storage.set).toBeCalled();
    });
  });
});
